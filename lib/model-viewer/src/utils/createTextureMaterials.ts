import { Material, MeshStandardMaterial, Texture } from 'three';
import { ITexture, TextureResolution } from '@/interface';
import { AppCache } from '@/lib';
import { formatTextureUrl } from './formatTextureUrl';
import { loadTexture } from './loadTexture';

let cachedInstance: AppCache<number, Material> | null = null;
const getCache = () => {
    if (!cachedInstance) {
        cachedInstance = new AppCache<number, Material>();
    }
    return cachedInstance;
};

export const createTextureMaterials = async (
    texture: ITexture,
    environment: Texture | null,
    resolution: TextureResolution,
): Promise<Material> => {
    return new Promise(async (resolve) => {
        let material: Material;

        const cache = getCache();
        const cacheItem = cache.get(texture.id);

        if (cacheItem) {
            return resolve(cacheItem);
        } else {
            if (texture.pbr?.diffuse) {
                const url = formatTextureUrl(texture.pbr?.diffuse, resolution);
                const textr = await loadTexture(url);

                material = new MeshStandardMaterial({
                    envMap: environment,
                    envMapIntensity: 1,
                    map: textr,
                    metalness:
                        texture.type === 'metal' || texture.type === 'hardware'
                            ? 1
                            : 0,
                    roughness:
                        texture.type === 'metal' || texture.type === 'hardware'
                            ? 0.1
                            : 0.4,
                });

                if (textr) {
                    textr.dispose();
                }

                cache.set(texture.id, material);

                resolve(material);
            }
        }
    });
};
