import { MeshStandardMaterial } from 'three';
import { ITexture, TextureType } from '@/interface';

export interface IBlenderTexture {
    type: TextureType;
    texture: ITexture | null;
    formattedName: string;
}

export const getTextureFromBlenderMaterial = (
    material: MeshStandardMaterial,
): IBlenderTexture | null => {
    const wood = material.name?.indexOf('wood') !== -1;
    const primary = material.name?.indexOf('primary') !== -1;
    const contrast = material.name?.indexOf('contrast') !== -1;
    const metal = material.name?.indexOf('metal') !== -1;
    const hardware = material.name?.indexOf('hardware') !== -1;

    let id = 1;

    if (material.name) {
        const regex = /[-](\d)/;
        const match = regex.exec(material.name);
        if (match) {
            id = Number(match[1]) || 1;
        }
    }

    if (wood || primary) {
        return {
            type: 'wood',
            texture: null,
            formattedName: 'base',
        };
    }

    if (contrast) {
        return {
            type: 'wood',
            texture: null,
            formattedName: 'alt',
        };
    }

    if (metal || hardware) {
        return {
            type: 'metal',
            texture: null,
            formattedName: 'metal',
        };
    }
    return null;
};
