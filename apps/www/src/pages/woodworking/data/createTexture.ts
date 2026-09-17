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
                ? `${url}/${name}/${variant}-diffuse`
                : null,
            ao: options.ao ? `${url}/${name}/${variant}-ao` : null,
            displace: options.displace
                ? `${url}/${name}/${variant}-disp`
                : null,
            metal: options.metal ? `${url}/${name}/${variant}-metallic` : null,
            normal: options.normal ? `${url}/${name}/${variant}-normal` : null,
            rough: options.rough ? `${url}/${name}/${variant}-roughness` : null,
            coat: options.coat ? `${url}/${name}/${variant}-coat` : null,
            coatNormal: options.coatNormal
                ? `${url}/${name}/${variant}-coatNormal`
                : null,
            coatRough: options.coatRough
                ? `${url}/${name}/${variant}-coatRoughness`
                : null,
            specular: options.specular
                ? `${url}/${name}/${variant}-spec`
                : null,
        },
    };
};
