import {
    AmbientLight,
    DirectionalLight,
    PMREMGenerator,
    Scene,
    WebGLRenderer,
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
import hdr from '../assets/env/1a.hdr';

export class Lights {
    public keyLight: DirectionalLight;
    public ambientLight: AmbientLight;
    public fillLight: DirectionalLight;
    public backLight: DirectionalLight;

    constructor(scene: Scene, renderer: WebGLRenderer) {
        this.ambientLight = new AmbientLight(0xfff8f0, 0.4);

        this.keyLight = new DirectionalLight(0xffeedd, 1.5);
        this.keyLight.position.set(5, 8, 5);
        this.keyLight.castShadow = true;

        // 1. Increase shadow map resolution for cleaner edges
        this.keyLight.shadow.mapSize.width = 2048;
        this.keyLight.shadow.mapSize.height = 2048;

        // 2. Fix shadow acne lines (Push the shadow map slightly away from the surface)
        this.keyLight.shadow.bias = -0.0005; // Very small negative values fix flat surfaces
        this.keyLight.shadow.normalBias = 0.02;

        // 3. Fill Light (Softens shadows from opposite side - cool/neutral tone)
        this.fillLight = new DirectionalLight(0xddeeff, 0.6);
        this.fillLight.position.set(-5, 4, 3);

        // 4. Back / Rim Light (Separates object from background, highlights edges)
        this.backLight = new DirectionalLight(0xffffff, 1.0);
        this.backLight.position.set(0, 5, -5);

        scene.add(
            this.ambientLight,
            this.keyLight,
            this.fillLight,
            this.backLight,
        );

        this.loadEnvironment(renderer, scene);
    }

    async loadEnvironment(renderer: WebGLRenderer, scene: Scene) {
        const pmremGenerator = new PMREMGenerator(renderer);

        const hdriLoader = new HDRLoader();
        const hdriTxtr = await hdriLoader.loadAsync(hdr);

        const env = pmremGenerator.fromEquirectangular(hdriTxtr).texture;
        scene.environment = env;

        env.dispose();
        hdriTxtr.dispose();
        pmremGenerator.dispose();
    }

    dispose() {
        this.ambientLight.dispose();
        this.fillLight.dispose();
        this.keyLight.dispose();
        this.backLight.dispose();
    }
}
