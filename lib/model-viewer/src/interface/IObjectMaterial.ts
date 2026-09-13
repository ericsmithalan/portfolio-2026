import { Material } from 'three';
import { ITexture, TextureType } from './ITexture';

export interface IObjectMaterial {
    type: TextureType;
    objects: Array<number>;
    texture: ITexture;
    material: Material | null;
}
