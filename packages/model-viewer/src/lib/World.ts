import {
    ACESFilmicToneMapping,
    Color,
    EventDispatcher,
    FogExp2,
    PCFShadowMap,
    PerspectiveCamera,
    Scene,
    SRGBColorSpace,
    WebGLRenderer,
} from 'three';
import { ViewportGizmo } from 'three-viewport-gizmo';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

import { disposeObject } from '@/utils';
import { Floor } from './Floor';
import { Grid } from './Grid';
import { Lights } from './Lights';
import { IViewerOptions } from '@/interface';

export interface IWorldEvent {
    resize: { type: string; size: IScreenSize };
}
export interface IScreenSize {
    width: number;
    height: number;
    aspect: number;
}

export class World extends EventDispatcher<IWorldEvent> {
    readonly gizmo: ViewportGizmo | null;
    readonly renderer: WebGLRenderer;
    readonly scene: Scene;
    readonly camera: PerspectiveCamera;
    readonly orbitControls: OrbitControls;
    readonly lights: Lights;
    readonly grid: Grid | null;
    readonly floor: Floor | null;
    private showStats: boolean;
    private options: IViewerOptions | undefined;
    private _canvas: HTMLCanvasElement;
    private geometries = 0;
    private textures = 0;

    size: IScreenSize = {
        width: 0,
        height: 0,
        aspect: 0,
    };

    constructor(canvas: HTMLCanvasElement, options: IViewerOptions) {
        super();

        const worldTheme = options.theme.world;

        this._canvas = canvas;
        this.options = options;
        this.setSize();
        this.showStats = options.showStats;

        this.scene = new Scene();
        this.scene.name = 'Scene';
        this.scene.background = new Color(worldTheme.backgroundColor);
        this.scene.fog = new FogExp2(
            new Color(worldTheme.fogColor),
            worldTheme.fogDensity,
        );

        this.camera = new PerspectiveCamera(40, this.size.aspect, 1, 50);
        this.camera.name = 'Camera';
        this.camera.zoom = 1;
        this.camera.updateProjectionMatrix();
        this.camera.position.set(15, 10, 9);
        this.camera.updateProjectionMatrix();

        this.renderer = new WebGLRenderer({
            canvas: canvas,
            antialias: true,
            alpha: true,
        });

        this.renderer.shadowMap.enabled = true;
        this.renderer.toneMapping = ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1;
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(this.size.width, this.size.height);
        this.renderer.shadowMap.type = PCFShadowMap;
        this.renderer.outputColorSpace = SRGBColorSpace;
        this.renderer.autoClear = false;

        this.orbitControls = new OrbitControls(this.camera, canvas);
        if (!options.restrictOrbit) {
            this.orbitControls.enableDamping = false;
            this.orbitControls.dampingFactor = 0.05;
            this.orbitControls.screenSpacePanning = true;

            // 1. Remove distance zoom restrictions (set back to default values)
            this.orbitControls.minDistance = 0; // Default: 0 (Allows zooming inside the target)
            this.orbitControls.maxDistance = Infinity; // Default: Infinity (Allows infinite zooming out)

            // 2. Remove rotational angle constraints (allows complete orbital rotation)
            this.orbitControls.minPolarAngle = 0; // Default: 0 (Allows looking straight down from the top)
            this.orbitControls.maxPolarAngle = Math.PI; // Default: Math.PI (Allows looking straight up from the bottom)
            this.orbitControls.minAzimuthAngle = -Infinity; // Default: -Infinity (Unlocks full horizontal rotation)
            this.orbitControls.maxAzimuthAngle = Infinity; // Default: Infinity
        } else {
            this.orbitControls = new OrbitControls(this.camera, canvas);
            this.orbitControls.enableDamping = false; // an animation loop is required when either damping or auto-rotation are enabled
            this.orbitControls.dampingFactor = 0.05;
            this.orbitControls.screenSpacePanning = true;
            this.orbitControls.minDistance = 0.1;
            this.orbitControls.maxDistance = 3500;
            this.orbitControls.maxPolarAngle = Math.PI / 1.5;
        }
        this.orbitControls.update();

        this.gizmo = !this.options.showAxisHelper
            ? null
            : new ViewportGizmo(this.camera, this.renderer, {
                  placement: 'bottom-right',
                  container: this._canvas,
                  size: 0.7,
              });

        if (this.gizmo) {
            this.gizmo.attachControls(this.orbitControls);
        }

        this.lights = new Lights(this.scene, options?.envUrl);

        if (options.showGrid) {
            this.grid = new Grid(this.scene, this.options.theme);
        } else {
            this.grid = null;
        }

        if (options.showFloor) {
            this.floor = new Floor(this.scene);
        } else {
            this.floor = null;
        }

        this.registerEvents();
    }

    logStats() {
        if (this.showStats) {
            if (this.renderer.info.memory.geometries !== this.geometries) {
                this.geometries = this.renderer.info.memory.geometries;
                console.log('geometries', this.renderer.info.memory.geometries);
            }

            if (this.renderer.info.memory.textures !== this.textures) {
                this.textures = this.renderer.info.memory.textures;
                console.log('textures', this.renderer.info.memory.geometries);
            }
        }
    }

    private resize = () => {
        this.setSize();

        this.camera.aspect = this.size.aspect;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(this.size.width, this.size.height);

        if (this.gizmo) {
            this.gizmo.update();
        }

        this.dispatchEvent({ type: 'resize', size: this.size });
    };

    private registerEvents() {
        window.addEventListener('resize', () => this.resize());
    }

    private unregisterEvents() {
        window.removeEventListener('resize', () => this.resize());
    }

    setSize() {
        let width: number = 0;
        let height: number = 0;

        if (this.options?.height) {
            height = Number(this.options.height);
        } else {
            height = window.innerHeight;
        }

        if (this.options?.width) {
            width = Number(this.options.width);
        } else {
            width = window.innerWidth;
        }

        this.size.aspect = width / height;
        this.size.width = width;
        this.size.height = height;
    }

    dispose() {
        this.unregisterEvents();

        this.orbitControls.dispose();
        this.renderer.dispose();

        if (this.gizmo) {
            this.gizmo.dispose();
        }

        if (this.grid) {
            this.grid.dispose();
        }

        if (this.floor) {
            this.floor.dispose();
        }

        this.lights.dispose();
        disposeObject(this.scene);
    }
}
