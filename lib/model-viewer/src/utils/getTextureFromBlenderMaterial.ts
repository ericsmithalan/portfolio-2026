import { MeshStandardMaterial } from 'three';
import { ITexture, ITextureData, TextureType } from '@/interface';

export const getTextureFromBlenderMaterial = (
    material: MeshStandardMaterial,
    textureData: ITextureData,
): { type: TextureType; texture: ITexture; formattedName: string } | null => {
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
            texture: textureData.woodTextures[0],
            formattedName: 'Base',
        };
    }

    if (contrast) {
        return {
            type: 'wood',
            texture: textureData.woodTextures[0],
            formattedName: 'Accent',
        };
    }

    if (metal || hardware) {
        return {
            type: 'metal',
            texture: textureData.metalTextures[0],
            formattedName: 'metal',
        };
    }
    return null;
};
