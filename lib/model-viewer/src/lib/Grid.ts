import {
    BufferGeometry,
    LineBasicMaterial,
    LineSegments,
    Object3D,
    Scene,
    Vector3,
} from 'three';
import { disposeGeometry, disposeMaterial, disposeObject } from '@/utils';
import { ITheme } from '@/interface';

export class Grid extends Object3D {
    constructor(scene: Scene, theme: ITheme) {
        super();

        this.name = 'Grid';

        const { grid } = theme;

        const hpoints: Array<Vector3> = [];
        const vpoints: Array<Vector3> = [];

        const stepHeight = (2 * grid.size) / grid.divisions;
        const stepWidth = (2 * grid.divisions) / grid.divisions;

        const material = new LineBasicMaterial({
            color: grid.lineColor,
            opacity: grid.opacity,
        });

        // Add horizontal lines
        for (var i = -grid.size; i <= grid.size; i += stepHeight) {
            hpoints.push(new Vector3(-grid.size, i, 0));
            hpoints.push(new Vector3(grid.size, i, 0));
        }

        // Add vertical lines
        for (var i = -grid.size; i <= grid.size; i += stepWidth) {
            vpoints.push(new Vector3(i, -grid.size, 0));
            vpoints.push(new Vector3(i, grid.size, 0));
        }

        const hLine = new BufferGeometry().setFromPoints(hpoints);
        const vLine = new BufferGeometry().setFromPoints(vpoints);

        const vert = new LineSegments(hLine, material);
        const horiz = new LineSegments(vLine, material);

        this.rotateX(Math.PI / 2);

        this.add(vert, horiz);

        disposeGeometry(hLine);
        disposeGeometry(vLine);
        disposeMaterial(material);

        scene.add(this);
    }

    dispose() {
        disposeObject(this);
    }
}
