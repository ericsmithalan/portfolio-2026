import { Mesh, Object3D } from 'three';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { IModel, IStat, IObjectMaterialMapper, ITheme } from '@/interface';
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
                const materials: Map<string, IObjectMaterialMapper> = new Map();

                scene.castShadow = true;
                scene.receiveShadow = true;

                scene.traverse(async (part: Object3D) => {
                    if (part instanceof Mesh) {
                        part.castShadow = true;
                        part.receiveShadow = true;

                        if (part.material) {
                            const defaultTexture =
                                getTextureFromBlenderMaterial(
                                    model,
                                    part.material,
                                );

                            if (defaultTexture) {
                                const material = materials.get(
                                    defaultTexture.name,
                                );

                                if (!material) {
                                    materials.set(defaultTexture.name, {
                                        type: defaultTexture.type,
                                        objects: [defaultTexture.id],
                                        texture: defaultTexture,
                                        material: null,
                                    });
                                } else {
                                    //only push part ID's
                                    material.objects.push(part.id);
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
