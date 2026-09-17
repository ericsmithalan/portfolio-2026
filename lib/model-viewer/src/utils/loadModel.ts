import { Mesh, Object3D } from 'three';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { IModel, IStat, ITexture, ITheme } from '@/interface';
import { Edges, ObjectUserData, Viewport } from '@/lib';
import { getObjectDimensions } from './getObjectDimensions';
import { getTextureFromBlenderMaterial } from './getTextureFromBlenderMaterial';

const loader: GLTFLoader = new GLTFLoader();

export const loadModel = (
    model: IModel | null,
    viewport: Viewport,
    theme: ITheme,
): Promise<IModel> => {
    return new Promise(async (resolve) => {
        if (model) {
            loader.load(model.url, (gltf) => {
                const scene = gltf.scene;
                const edges = new Edges();
                const materials: Map<string, ITexture> = new Map();

                scene.castShadow = true;
                scene.receiveShadow = true;

                scene.traverse((part: Object3D) => {
                    if (part instanceof Mesh) {
                        part.castShadow = true;
                        part.receiveShadow = true;

                        if (part.material) {
                            const matType = getTextureFromBlenderMaterial(
                                part.material,
                            );

                            if (matType) {
                                const mat = materials.get(
                                    matType.formattedName,
                                );

                                if (!mat) {
                                    materials.set(matType.formattedName, {
                                        type: matType.type,
                                        id: part.id,
                                        name: '',
                                        thumbnail: '',
                                        pbr: null,
                                    });
                                }
                            }
                        }

                        part.userData = new ObjectUserData({
                            objectId: part.id,
                            selectable: true,
                        });

                        model.children.push(part);
                        edges.add(part, theme);
                    } else {
                        part.layers.disableAll();
                    }
                });

                // make sure metal is the last button.
                const keyToMove = 'metal';
                if (materials.has(keyToMove)) {
                    const value = materials.get(keyToMove)!;
                    materials.delete(keyToMove); // 1. Remove it
                    materials.set(keyToMove, value); // 2. Re-insert it at the end
                }

                const size = getObjectDimensions(viewport, scene, true);

                const getStats = (): Array<IStat> => {
                    return [
                        {
                            name: 'parts',
                            value: String(model.children.length),
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

                scene.userData = new ObjectUserData({
                    objectId: scene.id,
                    selectable: true,
                });

                edges.edgeGroup.updateMatrixWorld();
                scene.updateMatrixWorld();

                model.edges = edges;
                model.object = scene;
                model.stats = getStats();
                model.materials = materials;

                resolve(model);
            });
        }
    });
};
