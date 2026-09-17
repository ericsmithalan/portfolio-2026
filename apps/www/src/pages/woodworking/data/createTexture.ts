import { ITexture, TextureType } from '@portfolio/model-viewer';

export const createTextureData = (
    id: number,
    type: TextureType,
    name: string,
    variant: number,
    url: string,
    options: {
        ao: boolean;
        diffuse: boolean;
        displace: boolean;
        metal: boolean;
        normal: boolean;
        rough: boolean;
        coat: boolean;
        coatRough: boolean;
        coatNormal: boolean;
        specular: boolean;
    },
): ITexture => {
    return {
        id: id,
        type: type,
        name: name,
        thumbnail: `${url}/${name}/${variant}-thumb.png`,
        pbr: {
            diffuse: options.diffuse
                ? `${url}/${name}/${variant}-diffuse-2k.png`
                : null,
            ao: options.ao ? `${url}/${name}/${variant}-ao-2k.png` : null,
            displace: options.displace
                ? `${url}/${name}/${variant}-disp-2k.png`
                : null,
            metal: options.metal
                ? `${url}/${name}/${variant}-metallic-2k.png`
                : null,
            normal: options.normal
                ? `${url}/${name}/${variant}-normal-2k.png`
                : null,
            rough: options.rough
                ? `${url}/${name}/${variant}-roughness-2k.png`
                : null,
            coat: options.coat ? `${url}/${name}/${variant}-coat-2k` : null,
            coatNormal: options.coatNormal
                ? `${url}/${name}/${variant}-coatNormal-2k.png`
                : null,
            coatRough: options.coatRough
                ? `${url}/${name}/${variant}-coatRoughness-2k.png`
                : null,
            specular: options.specular
                ? `${url}/${name}/${variant}-spec-2k.png`
                : null,
        },
    };
};
