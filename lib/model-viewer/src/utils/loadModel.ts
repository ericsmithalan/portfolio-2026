import { Mesh, Object3D } from 'three';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { IStat } from '@/interface';
import {
    Edges,
    IObjectUserData,
    ObjectUserData,
    Viewport,
    ITheme,
} from '@/lib';
import { getObjectDimensions } from './getObjectDimensions';

const loader: GLTFLoader = new GLTFLoader();

export const loadModel = (
    userData: IObjectUserData | null,
    viewport: Viewport,
    theme: ITheme,
): Promise<Object3D> => {
    return new Promise(async (resolve) => {
        if (userData) {
            loader.load(userData.url, (gltf) => {
                const scene = gltf.scene;
                const edges = new Edges();

                scene.castShadow = true;
                scene.receiveShadow = true;

                scene.traverse(async (part: Object3D) => {
                    if (part instanceof Mesh) {
                        part.castShadow = true;
                        part.receiveShadow = true;

                        if (part.material && userData.textures) {
                            const base =
                                part.material.name?.indexOf('wood') !== -1 ||
                                part.material.name?.indexOf('primary') !== -1;
                            const alt =
                                part.material.name?.indexOf('contrast') !== -1;
                            const metal =
                                part.material.name?.indexOf('metal') !== -1;

                            base && userData.textures.baseIds.push(part.id);
                            alt && userData.textures.altIds.push(part.id);
                            metal && userData.textures.metalIds.push(part.id);
                        }

                        part.userData = new ObjectUserData({
                            objectId: part.id,
                            selectable: true,
                        });

                        edges.add(part, theme);
                    } else {
                        part.layers.disableAll();
                    }
                });

                const size = getObjectDimensions(viewport, scene, true);

                const getStats = (): Array<IStat> => {
                    return [
                        {
                            name: 'parts',
                            value: String(scene.children.length),
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

                edges.edgeGroup.updateMatrixWorld();
                scene.updateMatrixWorld();

                userData.edges = edges;
                userData.stats = getStats();

                scene.userData = new ObjectUserData({
                    ...userData,
                    objectId: scene.id,
                    selectable: true,
                });

                console.log('scene.userData', scene.userData);

                resolve(scene);
            });
        }
    });
};
