import { Object3D } from 'three';
import { Edges } from '@/lib';
import { IStat } from './IStat';
import { ITexture } from './ITexture';
import { IImageResource } from './IImageResource';

export interface IModel {
    id: number;
    name: string;
    url: string;
    images: Array<IImageResource>;
    object: Object3D | null;
    edges: Edges | null;
    materials: Map<string, ITexture> | null;
    textures: Array<ITexture> | null;
    children: Array<Object3D>;
    stats: Array<IStat>;
}
