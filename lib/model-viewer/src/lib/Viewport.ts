import { AnimationMixer, EventDispatcher, Object3D, Timer } from 'three';
import { DefaultTheme, ITheme } from '@/lib';
import { AnimationState } from '@/types';
import { disposeObject, fitCameraToObject, loadModel } from '@/utils';
import { Exploder, IExploderEvent } from './Exploder';
import { ISelectionEvent, Selection } from './Selection';
import { IWorldEvent, World } from './World';
import { IObjectUserData } from './ObjectUserData';
import { IViewerOptions } from '@/interface';

export interface IViewportEvent {
    loading: { type: string; value: boolean };
    modelChanged: { type: string; model: Object3D | null };
    selectionChanged: { type: string; selection: Object3D | null };
    modelAnimated: {
        type: string;
        running: boolean;
        state: AnimationState;
    };
    animate: { type: string; time: number };
}

export class Viewport extends EventDispatcher<IViewportEvent> {
    mixer: AnimationMixer | null = null;

    readonly world: World;
    readonly selection: Selection | null;
    exploder: Exploder | null = null;

    private _model: Object3D | null = null;
    private _edges: boolean = true;
    private _options: IViewerOptions;

    clock = new Timer();
    animating: boolean = false;

    private defaultOptions: IViewerOptions = {
        isMobile: false,
        height: undefined,
        width: undefined,
        showAxisHelper: true,
        showStats: true,
        theme: DefaultTheme,
        showGrid: true,
        showFloor: true,
        restrictOrbit: true,
        showObjectBorders: true,
    };

    constructor(canvas: HTMLCanvasElement, options?: Partial<IViewerOptions>) {
        super();

        this._options = { ...this.defaultOptions, ...options };

        this.world = new World(canvas, this._options);
        this.selection = this._options.isMobile
            ? null
            : new Selection(
                  canvas,
                  this.world.scene,
                  this.world.camera,
                  this.world.renderer,
                  this._options.theme,
              );
        this.setEvents();
        this.init();
    }

    get edges() {
        return this._edges;
    }

    set edges(value: boolean) {
        if (!this._options.showObjectBorders) {
            this._edges = false;
        } else {
            if (this.model && this.model.userData.edges) {
                this.model.userData.edges.edgeGroup.visible = value;
                this._edges = value;
            }
        }
    }

    get model() {
        return this._model;
    }

    set model(obj: Object3D | null) {
        if (this._model) {
            this.disposeModelAnimations();
            disposeObject(this._model);
            this.exploder = null;
            this._model.userData.edges?.dispose();
        }

        if (obj && obj) {
            this.world.scene.add(obj);
            this.world.lights.alignToModel(obj);

            if (obj.userData.edges) {
                this.world.scene.add(obj.userData.edges.edgeGroup);
                obj.userData.edges.edgeGroup.visible = this.edges;
            }

            this.setupExploder(obj);
        }

        this._model = obj;
        this.dispatchEvent({ type: 'modelChanged', model: obj });
    }

    toggleExplode() {
        if (this.model && this.exploder && !this.exploder.animating) {
            this.exploder.play();
        }
    }

    private setupExploder(model: Object3D | null) {
        if (this.exploder) {
            this.disposeExploder();
        }

        if (model && model.userData.edges) {
            this.exploder = new Exploder(model, model.userData.edges);
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

    async loadModel(model: IObjectUserData) {
        if (!this.model?.id) {
            this.dispatchEvent({ type: 'loading', value: true });
            const obj = await loadModel(model, this, this._options);

            if (obj) {
                fitCameraToObject(
                    this.world.camera,
                    this.world.orbitControls,
                    [obj],
                    1,
                );
            }

            this.model = obj;

            this.dispatchEvent({ type: 'loading', value: false });
        }
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
        if (this.mixer && this.animating && this.model?.userData.edges) {
            this.mixer.update(this.clock.getDelta());
            this.model.userData.edges.update(this.world.scene);
        }

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
            disposeObject(this.model);

            if (this.model.userData.edges) {
                this.model.userData.edges.dispose();
            }
        }

        this.selection?.dispose();
        this.world.dispose();
    }
}
