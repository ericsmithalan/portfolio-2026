import { Mesh, Object3D } from 'three';
import { GLTFLoader, DRACOLoader } from 'three/examples/jsm/Addons.js';
import { IStat, IViewerOptions } from '@/interface';
import { Edges, IObjectUserData, ObjectUserData, Viewport } from '@/lib';
import { getObjectDimensions } from './getObjectDimensions';

const loader: GLTFLoader = new GLTFLoader();
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath(
    'https://www.gstatic.com/draco/versioned/decoders/1.5.6/',
);

export const loadModel = (
    userData: IObjectUserData | null,
    viewport: Viewport,
    options: IViewerOptions,
): Promise<Object3D> => {
    return new Promise(async (resolve) => {
        if (userData) {
            loader.setDRACOLoader(dracoLoader);
            loader.load(userData.url, (gltf) => {
                const scene = gltf.scene;
                const edges = new Edges();

                scene.castShadow = true;
                scene.receiveShadow = true;
                scene.renderOrder = 0;

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

                        if (options.showObjectBorders) {
                            edges.add(part, options.theme);
                        }
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

                // console.log('scene.userData', scene.userData);

                resolve(scene);
            });
        }
    });
};
