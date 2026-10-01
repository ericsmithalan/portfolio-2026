import {
    ACESFilmicToneMapping,
    Color,
    EventDispatcher,
    FogExp2,
    NeutralToneMapping,
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
import { IViewportOptions } from '@/lib';

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
    readonly container: HTMLCanvasElement;

    private showStats: boolean;
    private geometries = 0;
    private textures = 0;

    size: IScreenSize = {
        width: 0,
        height: 0,
        aspect: 0,
    };

    constructor(canvas: HTMLCanvasElement, options: IViewportOptions) {
        super();

        this.container = canvas;
        this.showStats = options.showStats;

        this.setSize();

        this.scene = new Scene();
        this.scene.name = 'Scene';

        // this.scene.background = new Color(options.theme.world.backgroundColor);

        this.scene.fog = new FogExp2(
            new Color(options.theme.world.fogColor),
            options.theme.world.fogDensity,
        );

        this.camera = new PerspectiveCamera(
            options.cameraFov,
            this.size.aspect,
            options.cameraNear,
            options.cameraFar,
        );
        this.camera.name = 'Camera';
        this.camera.zoom = options.cameraZoom;
        this.camera.updateProjectionMatrix();
        this.camera.position.set(0, 1.5, 0);
        this.camera.updateProjectionMatrix();

        this.renderer = new WebGLRenderer({
            canvas: canvas,
            antialias: true,
            alpha: true,
        });

        this.renderer.shadowMap.enabled = true;
        this.renderer.toneMapping = NeutralToneMapping;
        this.renderer.toneMappingExposure = 1;
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(this.size.width, this.size.height);
        this.renderer.shadowMap.type = PCFShadowMap;
        this.renderer.outputColorSpace = SRGBColorSpace;
        this.renderer.autoClear = false;
        this.renderer.setClearColor(0x000000, 0);

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
            this.orbitControls.enableDamping = false; // an animation loop is required when either damping or auto-rotation are enabled
            this.orbitControls.dampingFactor = 0.05;
            this.orbitControls.screenSpacePanning = true;
            this.orbitControls.minDistance = 0.1;
            this.orbitControls.maxDistance = 3500;
            this.orbitControls.maxPolarAngle = Math.PI / 1.5;
        }
        this.orbitControls.update();

        this.gizmo = options.showAxisHelper
            ? new ViewportGizmo(this.camera, this.renderer, {
                  placement: 'bottom-right',
                  container: this.container,
                  size: 1,
              })
            : null;

        if (this.gizmo) {
            this.gizmo.attachControls(this.orbitControls);
            this.gizmo.visible = true;
        }

        this.lights = new Lights(this.scene, options?.envUrl);

        if (options.showGrid) {
            this.grid = new Grid(this.scene, options.theme);
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
        const parentEl = this.container.parentElement?.getBoundingClientRect();

        const height = parentEl?.height || 100;
        const width = parentEl?.width || 100;

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
