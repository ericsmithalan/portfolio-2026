import { Material, MeshStandardMaterial, Texture } from 'three';
import { loadTexture } from './loadTexture';
import { AppCache } from '@/lib';

const cached = new AppCache<string, Material>();

export const createTextureMaterials = async (
    environment: Texture | null,
    texture?: string | null,
): Promise<Material> => {
    return new Promise(async (resolve) => {
        let material: Material;

        if (texture) {
            const cache = cached.get(texture);

            if (cache) {
                resolve(cache);
            } else {
                const textr = await loadTexture(texture);
                material = new MeshStandardMaterial({
                    envMap: environment,
                    envMapIntensity: 1,
                    map: textr,
                });

                cached.set(texture, material);

                // if (textr) {
                //     textr.dispose();
                // }

                resolve(material);
            }
        }
    });
};
