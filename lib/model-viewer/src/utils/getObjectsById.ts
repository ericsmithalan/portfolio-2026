import { Object3D } from 'three';
import { Viewport } from '@/lib';

export const getObjectsById = (
    viewport: Viewport,
    ids: Array<number> | Array<Array<number>>,
    callback: (obj: Object3D) => void,
): void => {
    for (const id of ids) {
        if (Array.isArray(id)) {
            for (const nestedId of id) {
                const obj = viewport.world.scene.getObjectById(nestedId);
                if (obj) {
                    callback(obj);
                }
            }
            continue;
        } else {
            const obj = viewport.world.scene.getObjectById(id);
            if (obj) {
                callback(obj);
            }
        }
    }
};
