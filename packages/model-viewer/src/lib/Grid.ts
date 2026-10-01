import { BufferGeometry, LineBasicMaterial, LineSegments, Object3D, Scene, Vector3 } from 'three';
import { disposeGeometry, disposeMaterial, disposeObject } from '@/utils';
import { ITheme, ObjectUserData } from '@/lib';

export class Grid extends Object3D {
    private gridGeometry: BufferGeometry;
    private material: LineBasicMaterial;

    constructor(scene: Scene, theme: ITheme) {
        super();

        this.name = 'Grid';

        const { grid } = theme;
        const points: Array<Vector3> = [];

        const size = grid.size;
        const divisions = grid.divisions;
        const step = (2 * size) / divisions;

        this.material = new LineBasicMaterial({
            color: grid.lineColor,
            opacity: grid.opacity,
            transparent: grid.opacity < 1,
            fog: true,
        });

        // Generate lines natively on the X and Z floor plane (Y stays 0)
        for (let i = 0; i <= divisions; i++) {
            const coord = -size + i * step;

            // 1. Grid lines running from front to back (parallel to the Z-axis)
            // Spaced out along the X-axis
            points.push(new Vector3(coord, 0, -size));
            points.push(new Vector3(coord, 0, size));

            // 2. Grid lines running from left to right (parallel to the X-axis)
            // Spaced out along the Z-axis
            points.push(new Vector3(-size, 0, coord));
            points.push(new Vector3(size, 0, coord));
        }

        this.gridGeometry = new BufferGeometry().setFromPoints(points);
        const gridLines = new LineSegments(this.gridGeometry, this.material);

        // No rotation needed anymore! The points are already on the floor.
        this.add(gridLines);

        this.userData = new ObjectUserData({ selectable: false });

        scene.add(this);
    }

    dispose() {
        if (this.gridGeometry) disposeGeometry(this.gridGeometry);
        if (this.material) disposeMaterial(this.material);
        disposeObject(this);
    }
}
