import {
    DirectionalLight,
    DirectionalLightHelper,
    Scene,
    EquirectangularReflectionMapping,
    Vector3,
    Object3D,
    Box3,
    Camera,
} from 'three';
import { HDRLoader } from 'three/examples/jsm/Addons.js';
import { ObjectUserData } from '.';

export class Lights {
    public key: DirectionalLight;
    public fill: DirectionalLight;
    public rim: DirectionalLight;

    helperKey: DirectionalLightHelper;
    helperRim: DirectionalLightHelper;
    helperFill: DirectionalLightHelper;

    _center = new Vector3();
    _camDir = new Vector3();
    _right = new Vector3();
    _up = new Vector3();
    _modelBox = new Box3();
    _boxSize = new Vector3();
    _modelPos = new Vector3();

    constructor(scene: Scene, envUrl?: string) {
        this.key = new DirectionalLight(0xffeedd, 1.5);
        this.key.position.set(5, 8, 5);
        this.key.castShadow = true;

        // 1. Increase shadow map resolution for cleaner edges
        this.key.shadow.mapSize.width = 2048;
        this.key.shadow.mapSize.height = 2048;
        this.key.shadow.camera.left = -4;
        this.key.shadow.camera.right = 4;
        this.key.shadow.camera.top = 4;
        this.key.shadow.camera.bottom = -4;

        this.key.shadow.camera.near = 0.1;
        this.key.shadow.camera.far = 25;
        // 2. Fix shadow acne lines (Push the shadow map slightly away from the surface)
        this.key.shadow.bias = -0.0005; // Very small negative values fix flat surfaces
        this.key.shadow.normalBias = 0.05;
        this.key.shadow.blurSamples = 30;
        this.key.shadow.radius = 8;
        this.key.shadow.intensity = 0.15;
        this.key.userData = new ObjectUserData({ selectable: false });

        // 3. Fill Light (Softens shadows from opposite side - cool/neutral tone)
        this.fill = new DirectionalLight(0xddeeff, 0.7);
        this.fill.position.set(-5, 4, 3);
        this.fill.userData = new ObjectUserData({ selectable: false });

        // 4. Back / Rim Light (Separates object from background, highlights edges)
        this.rim = new DirectionalLight(0xffffff, 1);
        this.rim.position.set(0, 5, -5);
        this.rim.userData = new ObjectUserData({ selectable: false });

        scene.add(this.key, this.fill, this.rim);

        const size: number = 1;
        this.helperFill = new DirectionalLightHelper(this.fill, size, 0x51e283); //  green
        this.helperFill.userData = new ObjectUserData({ selectable: false });
        this.helperRim = new DirectionalLightHelper(this.rim, size, 0x70a0ff); //blue
        this.helperRim.userData = new ObjectUserData({ selectable: false });
        this.helperKey = new DirectionalLightHelper(this.key, size, 0xff6b6b); // red
        this.helperKey.userData = new ObjectUserData({ selectable: false });

        // scene.add(this.helperFill, this.helperRim, this.helperKey);
        this.loadEnvironment(scene, envUrl);
    }

    public alignToModel(camera: Camera, modelPos: Vector3, selection: Object3D[]) {
        this._center.copy(modelPos);

        // 1. Find vector directions relative to what the camera lens "sees"
        camera.getWorldDirection(this._camDir); // Forward vector pointing down the camera lens
        this._up.copy(camera.up).normalize(); // Up vector
        this._right.crossVectors(this._camDir, this._up).normalize(); // Right vector

        // 2. POSITION THE KEY LIGHT (Top Right of the Viewport)
        // Move forward from the model towards the camera, then shift right and up
        this.key.position
            .copy(this._center)
            .addScaledVector(this._camDir, -18) // Distance out front
            .addScaledVector(this._right, 6) // Shift right
            .addScaledVector(this._up, 8); // Shift up

        // 3. POSITION THE FILL LIGHT (Opposite side to soften Key shadows)
        this.fill.position
            .copy(this._center)
            .addScaledVector(this._camDir, -6)
            .addScaledVector(this._right, -6) // Shift left (opposite of key)
            .addScaledVector(this._up, 4); // Slightly lower than key

        // 4. POSITION THE RIM LIGHT (Behind the object for high-contrast edges)
        this.rim.position
            .copy(this._center)
            .addScaledVector(this._camDir, 8) // Pushed deep behind the model
            .addScaledVector(this._up, 6);

        // 5. Direct targets toward the object's anchor point
        this.key.target.position.copy(this._center);
        this.fill.target.position.copy(this._center);
        this.rim.target.position.copy(this._center);

        this.key.target.updateMatrixWorld();
        this.fill.target.updateMatrixWorld();
        this.rim.target.updateMatrixWorld();

        // 6. AUTO-SCALE SHADOW FRUSTUM (Ensures smooth, faded floor shadows)
        this._modelBox.makeEmpty();
        for (const obj of selection) {
            this._modelBox.expandByObject(obj);
        }
        this._modelBox.getSize(this._boxSize);
        const maxDim = Math.max(this._boxSize.x, this._boxSize.y, this._boxSize.z);
        const halfSize = maxDim / 2 + 1.0;

        // Force maximum blur concentration precisely around the object dimensions
        this.key.shadow.camera.left = -halfSize;
        this.key.shadow.camera.right = halfSize;
        this.key.shadow.camera.top = halfSize;
        this.key.shadow.camera.bottom = -halfSize;

        this.key.shadow.camera.near = 0.1;
        this.key.shadow.camera.far = 30; // Keeps depth tracing functional past the ground floor line
        this.key.shadow.radius = 8; // Smooth edge feathering
        this.key.shadow.normalBias = 0.05;
        // Fallback for modern Three.js shadow maps to keep them gracefully faded
        if ('intensity' in this.key.shadow) {
            (this.key.shadow as any).intensity = 0.14;
        }

        this.key.shadow.camera.updateProjectionMatrix();

        // Update visual helpers if active
        this.helperKey.update();
        this.helperFill.update();
        this.helperRim.update();
    }

    loadEnvironment(scene: Scene, envUrl?: string) {
        if (envUrl) {
            const hdriLoader = new HDRLoader();

            hdriLoader.load(envUrl, (texture) => {
                texture.mapping = EquirectangularReflectionMapping;
                scene.environment = texture;
                scene.environmentIntensity = 0.4; // Keeps it subtle
            });
        }
    }

    dispose() {
        this.fill.dispose();
        this.key.dispose();
        this.rim.dispose();
        this.helperFill.dispose();
        this.helperKey.dispose();
        this.helperRim.dispose();
    }
}
