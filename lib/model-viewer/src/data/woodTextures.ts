import { ITexture } from '@/interface';
import { createTextureData } from './createTexture';

export const getAllWoodTextures = (): Array<ITexture> => {
    const settings = {
        coat: false,
        ao: false,
        diffuse: false,
        displace: false,
        metal: false,
        normal: false,
        rough: false,
        coatRough: false,
        coatNormal: false,
        specular: false,
    };

    const URL = '../textures/wood';

    return [
        createTextureData(138, 'wood', 'none', 1, URL, {
            ...settings,
            diffuse: true,
        }),
        createTextureData(299, 'wood', 'ash', 1, URL, {
            ...settings,
            diffuse: true,
        }),
        createTextureData(390, 'wood', 'birch', 1, URL, {
            ...settings,
            diffuse: true,
        }),
        createTextureData(745, 'wood', 'cherry', 1, URL, {
            ...settings,
            diffuse: true,
        }),
        createTextureData(464, 'wood', 'hickory', 1, URL, {
            ...settings,
            diffuse: true,
        }),
        createTextureData(584, 'wood', 'maple', 1, URL, {
            ...settings,
            diffuse: true,
        }),
        createTextureData(2292, 'wood', 'oak', 1, URL, {
            ...settings,
            diffuse: true,
        }),
        createTextureData(888, 'wood', 'walnut', 1, URL, {
            ...settings,
            diffuse: true,
        }),
    ];
};
