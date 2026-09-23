export type TextureType = 'wood' | 'metal';

// export interface IObjectMaterialMapper {
//     textureId: number;
//     type: TextureType;
//     objects: Array<number>;
//     texture: ITexture;
//     material: Material | null;
// }

export interface IPBRTexture {
    diffuse: string | null;
    ao: string | null;
    displace: string | null;
    metal: string | null;
    rough: string | null;
    normal: string | null;
    coat: string | null;
    coatRough: string | null;
    coatNormal: string | null;
    specular: string | null;
}

export interface ITexture {
    id: number;
    type: TextureType;
    name: string;
    thumbnail: string;
    pbr: IPBRTexture | null;
}
