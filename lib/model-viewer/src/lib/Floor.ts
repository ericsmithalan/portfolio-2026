import { Mesh, PlaneGeometry, Scene, ShadowMaterial } from 'three';
import { disposeGeometry, disposeMaterial, disposeObject } from '@/utils';

export class Floor extends Mesh {
    constructor(scene: Scene) {
        super();

        const material = new ShadowMaterial();
        material.opacity = 0.2;

        const geometry = new PlaneGeometry(2000, 2000);

        this.name = 'Floor';

        this.material = material;
        this.geometry = geometry;
        this.name = 'Floor';
        this.receiveShadow = true;

        this.rotateX(-Math.PI / 2);

        disposeMaterial(material);
        disposeGeometry(geometry);

        scene.add(this);
    }

    dispose() {
        disposeObject(this);
    }
}
