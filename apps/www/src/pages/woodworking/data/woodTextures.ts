import { ITexture } from '@portfolio/model-viewer';
import { createTextureData } from './createTexture';

const getWoodTextures = (): Array<ITexture> => {
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

    const URL = '/textures/wood';

    return [
        createTextureData(1, 'wood', 'white', 1, URL, {
            ...settings,
            diffuse: true,
            normal: true,
            rough: true,
        }),
        createTextureData(2, 'wood', 'ash', 1, URL, {
            ...settings,
            diffuse: true,
        }),
        createTextureData(3, 'wood', 'birch', 1, URL, {
            ...settings,
            diffuse: true,
        }),
        createTextureData(4, 'wood', 'cherry', 1, URL, {
            ...settings,
            diffuse: true,
        }),
        createTextureData(5, 'wood', 'hickory', 1, URL, {
            ...settings,
            diffuse: true,
        }),
        createTextureData(6, 'wood', 'maple', 1, URL, {
            ...settings,
            diffuse: true,
            ao: true,
            normal: true,
            rough: true,
            coatNormal: true,
            coat: true,
            coatRough: true,
            displace: true,
            metal: true,
        }),
        createTextureData(7, 'wood', 'oak', 1, URL, {
            ...settings,
            diffuse: true,
        }),
        createTextureData(8, 'wood', 'walnut', 1, URL, {
            ...settings,
            diffuse: true,
        }),
    ];
};

export const woodTextures: Array<ITexture> = getWoodTextures();
export const getWoodTexture = (name: string): ITexture => {
    const txtr =
        woodTextures.find((item) => item.name === name) || woodTextures[0];

    return txtr;
};
