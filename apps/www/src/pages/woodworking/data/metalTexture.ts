import { ITexture } from '@portfolio/model-viewer';
import { createTextureData } from './createTexture';

export const getMetalTextures = (): Array<ITexture> => {
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

    const url = '../textures/metal';

    return [
        createTextureData(112, 'wood', 'none', 1, url, {
            ...settings,
            diffuse: true,
        }),
        createTextureData(233, 'metal', 'black', 1, url, {
            ...settings,
            diffuse: true,
        }),
        createTextureData(354, 'metal', 'gray', 1, url, {
            ...settings,
            diffuse: true,
        }),
        createTextureData(476, 'metal', 'gray', 2, url, {
            ...settings,
            diffuse: true,
        }),
        createTextureData(598, 'metal', 'brass', 1, url, {
            ...settings,
            diffuse: true,
        }),
    ];
};
