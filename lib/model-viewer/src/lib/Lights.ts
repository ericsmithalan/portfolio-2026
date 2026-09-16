import {
    DirectionalLight,
    DirectionalLightHelper,
    Scene,
    EquirectangularReflectionMapping,
    Vector3,
    Object3D,
} from 'three';
import { HDRLoader } from 'three/examples/jsm/Addons.js';

export class Lights {
    public key: DirectionalLight;
    public fill: DirectionalLight;
    public rim: DirectionalLight;

    helperKey: DirectionalLightHelper;
    helperRim: DirectionalLightHelper;
    helperFill: DirectionalLightHelper;

    constructor(scene: Scene, envUrl?: string) {
        this.key = new DirectionalLight(0xffeedd, 1.5);
        this.key.position.set(5, 8, 5);
        this.key.castShadow = true;

        // 1. Increase shadow map resolution for cleaner edges
        this.key.shadow.mapSize.width = 2048;
        this.key.shadow.mapSize.height = 2048;

        // 2. Fix shadow acne lines (Push the shadow map slightly away from the surface)
        this.key.shadow.bias = -0.0005; // Very small negative values fix flat surfaces
        this.key.shadow.normalBias = 0.02;

        // 3. Fill Light (Softens shadows from opposite side - cool/neutral tone)
        this.fill = new DirectionalLight(0xddeeff, 0.5);
        this.fill.position.set(-5, 4, 3);

        // 4. Back / Rim Light (Separates object from background, highlights edges)
        this.rim = new DirectionalLight(0xffffff, 1);
        this.rim.position.set(0, 5, -5);

        scene.add(this.key, this.fill, this.rim);

        const size: number = 1;

        this.helperFill = new DirectionalLightHelper(this.fill, size, 0x51e283); //  green
        this.helperRim = new DirectionalLightHelper(this.rim, size, 0x70a0ff); //blue
        this.helperKey = new DirectionalLightHelper(this.key, size, 0xff6b6b); // red

        // scene.add(this.helperFill, this.helperRim, this.helperKey);
        this.loadEnvironment(scene, envUrl);
    }

    public alignToModel(model: Object3D) {
        const modelPos = new Vector3();
        model.getWorldPosition(modelPos);

        this.key.position.set(modelPos.x + 6, modelPos.y + 8, modelPos.z + 6);
        this.fill.position.set(modelPos.x - 6, modelPos.y + 4, modelPos.z + 4);
        this.rim.position.set(modelPos.x, modelPos.y + 8, modelPos.z - 8);

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
