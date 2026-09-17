import { MeshStandardMaterial } from 'three';
import { IModel, ITexture, TextureType } from '@/interface';

export const getTextureFromBlenderMaterial = (
    model: IModel,
    material: MeshStandardMaterial,
): ITexture => {
    const wood = material.name?.indexOf('wood') !== -1;
    const primary = material.name?.indexOf('primary') !== -1;
    const contrast = material.name?.indexOf('contrast') !== -1;
    const metal = material.name?.indexOf('metal') !== -1;

    if (wood || primary) {
        return model.defaultTextures.base;
    }

    if (contrast && model.defaultTextures.alt) {
        return model.defaultTextures.alt;
    }

    if (metal && model.defaultTextures.metal) {
        model.defaultTextures.metal;
    }

    return model.defaultTextures.base;
};
