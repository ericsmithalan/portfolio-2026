import {
    AnimationMixer,
    Clock,
    EventDispatcher,
    LoopOnce,
    Object3D,
} from 'three';
import { IModel, ITheme } from '@/interface';
import { AnimationState } from '@/types';
import { disposeObject, fitCameraToObject, loadModel } from '@/utils';
import { Exploder, IExploderEvent } from './Exploder';
import { ISelectionEvent, Selection } from './Selection';
import { IWorldEvent, World } from './World';

export interface IViewportEvent {
    loading: { type: string; value: boolean };
    modelChanged: { type: string; model: IModel | null };
    selectionChanged: { type: string; selection: Object3D | null };
    modelAnimated: {
        type: string;
        running: boolean;
        state: AnimationState;
    };
    animate: { type: string; time: number };
}

export class Viewport extends EventDispatcher<IViewportEvent> {
    private readonly isMobile: boolean = false;
    mixer: AnimationMixer | null = null;

    readonly world: World;
    readonly selection: Selection | null;
    exploder: Exploder | null = null;

    private _model: IModel | null = null;
    private _edges: boolean = true;

    clock = new Clock();
    animating: boolean = false;

    constructor(
        canvas: HTMLCanvasElement,
        isMobile: boolean,
        theme: ITheme,
        envUrl?: string,
    ) {
        super();

        this.isMobile = isMobile;
        this.world = new World(canvas, isMobile, false, theme, envUrl);
        this.selection = isMobile
            ? null
            : new Selection(
                  canvas,
                  this.world.scene,
                  this.world.camera,
                  this.world.renderer,
              );
        this.setEvents();
        this.init();
    }

    get edges() {
        return this._edges;
    }

    set edges(value: boolean) {
        if (this.model) {
            this.model.edges.edgeGroup.visible = value;
            this._edges = value;
        }
    }

    get model() {
        return this._model;
    }

    set model(value: IModel | null) {
        if (this._model) {
            this.disposeModelAnimations();
            disposeObject(this._model.object);
            this.exploder = null;
            this._model.edges.dispose();
        }

        if (value) {
            this.world.scene.add(value.object);
            this.world.scene.add(value.edges.edgeGroup);
            this.world.lights.alignToModel(value.object);

            // value.edges.edgeGroup.position.copy(value.object.position);
            value.edges.edgeGroup.visible = this.edges;
            this.setupExploder(value);

            if (value.animations) {
                this.setupModelAnimations(value.object);
            } else {
                if (this.mixer) {
                    this.mixer.stopAllAction();
                    this.mixer = null;
                }
            }
        }

        this._model = value;
        this.dispatchEvent({ type: 'modelChanged', model: value });
    }

    toggleExplode() {
        if (this.model && this.exploder && !this.exploder.animating) {
            this.exploder.play();
        }
    }

    toggleAnimation() {
        if (!this.animating && this.mixer) {
            if (this.mixer && this.model && this.model.animations) {
                let state: AnimationState = 'closed';

                this.model.animations.forEach((clip) => {
                    if (this.mixer) {
                        const action = this.mixer.clipAction(clip);

                        /// not sure why this works??
                        if (action.isRunning()) {
                            state = 'opened';
                            action.paused = false;
                            action.loop = LoopOnce;
                            action.timeScale = -action.timeScale;
                            action.clampWhenFinished = true;
                        }

                        /// need isRunning above ???
                        if (action.paused) {
                            action.paused = false;
                            action.loop = LoopOnce;
                            action.timeScale = -action.timeScale;
                            action.clampWhenFinished = true;

                            action.play();
                        } else {
                            action.paused = false;
                            action.loop = LoopOnce;
                            action.clampWhenFinished = true;

                            action.play();
                        }
                    }
                });

                this.dispatchEvent({
                    type: 'modelAnimated',
                    running: true,
                    state: state,
                });

                this.animating = true;
            }
        }
    }

    private setupExploder(model: IModel | null) {
        if (this.exploder) {
            this.disposeExploder();
        }

        if (model) {
            this.exploder = new Exploder(model.object, model.edges);
            this.exploder.addEventListener('animated', (e) =>
                this.handleExploderAnimated(e),
            );
            this.exploder.animating = false;
        }
    }

    private disposeExploder() {
        if (this.exploder) {
            this.exploder.removeEventListener('animated', (e) =>
                this.handleExploderAnimated(e),
            );
            this.exploder = null;
        }
    }

    private handleExploderAnimated(e: IExploderEvent['animated']) {
        this.dispatchEvent({
            type: 'modelAnimated',
            running: e.running,
            state: e.state,
        });
    }

    private handleModelAnimationComplete(e: any) {
        this.animating = false;
        if (this.mixer) {
            this.dispatchEvent({
                type: 'modelAnimated',
                running: false,
                state: e.direction === 1 ? 'opened' : 'closed',
            });
        }
    }

    private setupModelAnimations(model: Object3D) {
        this.animating = false;
        this.mixer = new AnimationMixer(model);
        this.mixer.addEventListener('loop', (e) =>
            this.handleModelAnimationComplete(e),
        );
        this.mixer.addEventListener('finished', (e) =>
            this.handleModelAnimationComplete(e),
        );
    }

    private disposeModelAnimations() {
        this.animating = false;
        if (this.mixer) {
            this.mixer.removeEventListener('loop', (e) =>
                this.handleModelAnimationComplete(e),
            );
            this.mixer.removeEventListener('finished', (e) =>
                this.handleModelAnimationComplete(e),
            );
        }

        this.mixer = null;
    }

    async loadModel(modelUrl: string) {
        this.dispatchEvent({ type: 'loading', value: true });

        const model = await loadModel(modelUrl, this, this.isMobile);

        if (model.object) {
            fitCameraToObject(
                this.world.camera,
                this.world.orbitControls,
                [model.object],
                2,
            );
        }

        this.model = model;

        this.dispatchEvent({ type: 'loading', value: false });
    }

    async init() {
        this.world.renderer.setAnimationLoop(() => this.animate());
        this.world.addEventListener('resize', this.resize);
    }

    private resize(e: IWorldEvent['resize']) {
        this.selection?.resize();
    }

    private animate = () => {
        const { renderer, scene, camera, orbitControls, size, gizmo } =
            this.world;

        renderer.setViewport(0, 0, size.width, size.height);
        renderer.render(scene, camera);

        if (this.exploder) {
            this.exploder.animateExplosion();
        }
        if (this.mixer && this.animating && this.model?.edges) {
            this.mixer.update(this.clock.getDelta());
            this.model.edges.update(this.world.scene);
        }

        this.selection?.animate();

        if (gizmo) {
            gizmo.render();
        }

        orbitControls.update();
        renderer.clearDepth();
        this.dispatchEvent({ type: 'animate', time: this.clock.getDelta() });
        this.world.logStats();
    };

    private handleSelectionChange = (e: ISelectionEvent['change']) => {
        this.dispatchEvent({
            type: 'selectionChanged',
            selection: e.object,
        });
    };

    private setEvents = () => {
        this.selection?.addEventListener('change', this.handleSelectionChange);
    };

    private removeEvents = () => {
        this.selection?.removeEventListener(
            'change',
            this.handleSelectionChange,
        );
        this.world.removeEventListener('resize', this.resize);
        this.selection?.removeEventListener(
            'change',
            this.handleSelectionChange,
        );
        this.disposeExploder();
    };

    dispose() {
        this.removeEvents();
        if (this.model) {
            disposeObject(this.model.object);
            this.model.edges.dispose();
        }

        this.selection?.dispose();
        this.world.dispose();
    }
}
