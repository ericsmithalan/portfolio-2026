export type TextureType = 'wood' | 'fabric' | 'metal' | 'hardware';
export type TextureResolution = '1k' | '2k' | '3k' | '4k';

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

export interface IBasicTexture {
    url: string;
}

export interface ITexture {
    id: number;
    type: TextureType;
    name: string;
    thumbnail: string;
    pbr: IPBRTexture;
    basic: IBasicTexture;
}
