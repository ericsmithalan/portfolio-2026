import {
    AmbientLight,
    DirectionalLight,
    DirectionalLightHelper,
    PMREMGenerator,
    Scene,
    WebGLRenderer,
    EquirectangularReflectionMapping,
    Vector3,
    Object3D,
} from 'three';
import { HDRLoader } from 'three/examples/jsm/Addons.js';

// ref for lumens: http://www.power-sure.com/lumens.htm
const bulbLuminousPowers: Record<string, number> = {
    '110000 lm (1000W)': 110000,
    '3500 lm (300W)': 3500,
    '1700 lm (100W)': 1700,
    '800 lm (60W)': 800,
    '400 lm (40W)': 400,
    '180 lm (25W)': 180,
    '20 lm (4W)': 20,
    Off: 0,
};

// ref for solar irradiances: https://en.wikipedia.org/wiki/Lux
const hemiLuminousIrradiances: Record<string, number> = {
    '0.0001 lx (Moonless Night)': 0.0001,
    '0.002 lx (Night Airglow)': 0.002,
    '0.5 lx (Full Moon)': 0.5,
    '3.4 lx (City Twilight)': 3.4,
    '50 lx (Living Room)': 50,
    '100 lx (Very Overcast)': 100,
    '350 lx (Office Room)': 350,
    '400 lx (Sunrise/Sunset)': 400,
    '1000 lx (Overcast)': 1000,
    '18000 lx (Daylight)': 18000,
    '50000 lx (Direct Sun)': 50000,
};

export class Lights {
    public key: DirectionalLight;
    public fill: DirectionalLight;
    public rim: DirectionalLight;

    helperKey: DirectionalLightHelper;
    helperRim: DirectionalLightHelper;
    helperFill: DirectionalLightHelper;

    constructor(scene: Scene) {
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

        scene.add(this.helperFill, this.helperRim, this.helperKey);
        this.loadEnvironment(scene);
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

    loadEnvironment(scene: Scene) {
        const hdriLoader = new HDRLoader();
        // const hdriTxtr = await hdriLoader.loadAsync(hdr);

        hdriLoader.load('/env/studio2k.hdr', (texture) => {
            texture.mapping = EquirectangularReflectionMapping;
            scene.environment = texture;
            scene.environmentIntensity = 0.4; // Keeps it subtle
        });
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
