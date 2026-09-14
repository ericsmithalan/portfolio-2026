import { Mesh, Object3D } from 'three';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { IObjectMaterial, IModel, IStat } from '@/interface';
import { Edges, ObjectUserData, Viewport } from '@/lib';
import { getObjectDimensions } from './getObjectDimensions';
import { getTextureFromBlenderMaterial } from './getTextureFromBlenderMaterial';

const loader: GLTFLoader = new GLTFLoader();

export const loadModel = (
    modelUrl: string,
    viewport: Viewport,
): Promise<IModel> => {
    return new Promise(async (resolve) => {
        if (modelUrl) {
            loader.load(`${modelUrl}`, (gltf) => {
                const model = gltf.scene;
                const edges = new Edges();
                const materials: Map<string, IObjectMaterial> = new Map();
                const children: Array<Object3D> = [];

                model.castShadow = true;
                model.receiveShadow = true;

                model.traverse((object: Object3D) => {
                    if (object instanceof Mesh) {
                        object.castShadow = true;
                        object.receiveShadow = true;

                        if (object.material) {
                            const matType = getTextureFromBlenderMaterial(
                                object.material,
                            );

                            if (matType) {
                                const mat = materials.get(
                                    matType.formattedName,
                                );

                                if (!mat) {
                                    materials.set(matType.formattedName, {
                                        type: matType.type,
                                        objects: [object.id],
                                        texture: matType.texture,
                                        material: null,
                                    });
                                } else {
                                    mat.objects.push(object.id);
                                }
                            }
                        }

                        object.userData = new ObjectUserData({
                            selectable: true,
                        });

                        children.push(object);
                        edges.add(object);
                    } else {
                        object.layers.disableAll();
                    }
                });

                // make sure metal is the last button.
                const keyToMove = 'metal';
                if (materials.has(keyToMove)) {
                    const value = materials.get(keyToMove)!;
                    materials.delete(keyToMove); // 1. Remove it
                    materials.set(keyToMove, value); // 2. Re-insert it at the end
                }

                const size = getObjectDimensions(viewport, model, true);

                const getStats = (): Array<IStat> => {
                    return [
                        {
                            name: 'parts',
                            value: String(children.length),
                        },
                        {
                            name: 'Width',
                            value: String(size?.x || 0),
                            unit: 'in',
                        },
                        {
                            name: 'Length',
                            unit: 'in',
                            value: String(size?.z || 0),
                        },
                        {
                            name: 'Height',
                            value: String(size?.y || 0),
                            unit: 'in',
                        },
                    ];
                };

                model.userData = new ObjectUserData(
                    { selectable: true },
                    null,
                    null,
                );

                edges.edgeGroup.updateMatrixWorld();
                model.updateMatrixWorld();

                resolve({
                    object: model,
                    // outliner: outliner,
                    edges: edges,
                    materials: materials,
                    children: children,
                    stats: getStats(),
                    animations:
                        gltf.animations?.length > 0 ? gltf.animations : null,
                });
            });
        }
    });
};
