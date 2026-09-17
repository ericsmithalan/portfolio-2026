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

import { ITheme } from '@/lib';
import { disposeObject } from '@/utils';
import { Floor } from './Floor';
import { Grid } from './Grid';
import { Lights } from './Lights';

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
    readonly grid: Grid;
    readonly floor: Floor;
    private showStats: boolean;

    private geometries = 0;
    private textures = 0;

    size: IScreenSize = {
        width: 0,
        height: 0,
        aspect: 0,
    };

    constructor(
        canvas: HTMLCanvasElement,
        isMobile: boolean,
        showStats: boolean,
        theme: ITheme,
        envUrl?: string,
    ) {
        super();

        const worldTheme = theme.world;

        this.setSize();
        this.showStats = showStats;
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
        this.orbitControls.enableDamping = false; // an animation loop is required when either damping or auto-rotation are enabled
        this.orbitControls.dampingFactor = 0.05;
        this.orbitControls.screenSpacePanning = true;
        this.orbitControls.minDistance = 0.1;
        this.orbitControls.maxDistance = 3500;
        this.orbitControls.maxPolarAngle = Math.PI / 1.5;
        this.orbitControls.update();

        this.gizmo = isMobile
            ? null
            : new ViewportGizmo(this.camera, this.renderer, {
                  placement: 'bottom-right',
              });

        if (this.gizmo) {
            this.gizmo.scale.set(0.7, 0.7, 0.7);
            this.gizmo.attachControls(this.orbitControls);
        }

        this.lights = new Lights(this.scene, envUrl);
        this.floor = new Floor(this.scene);
        this.grid = new Grid(this.scene, theme);

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

        width = window.innerWidth;
        height = window.innerHeight;

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

        this.grid.dispose();
        this.floor.dispose();
        this.lights.dispose();
        disposeObject(this.scene);
    }
}
