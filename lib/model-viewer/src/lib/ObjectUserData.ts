import { IImageResource, IStat, ITexture } from '@/interface';
import { Edges } from './Edges';

export interface ITextureData {
    base?: ITexture | null;
    baseIds: Array<number>;
    alt?: ITexture | null;
    altIds: Array<number>;
    metal?: ITexture | null;
    metalIds: Array<number>;
}

export interface IObjectUserData {
    name: string;
    url: string;
    objectId?: number | null;
    edgeId?: number | null;
    textureId?: number | null;
    selectable?: boolean;
    images: Array<IImageResource>;
    edges?: Edges;
    textures: ITextureData;
    stats?: Array<IStat>;
}

export class ObjectUserData implements IObjectUserData {
    objectId: number | null;
    edgeId: number | null;
    textureId: number | null;
    selectable: boolean;
    images: IImageResource[];
    edges: Edges;
    textures: ITextureData;
    stats: IStat[];
    url: string;
    name: string;

    constructor(data: Partial<IObjectUserData>) {
        this.objectId = data.objectId || null;
        this.edgeId = data.edgeId || null;
        this.textureId = data.textureId || null;
        this.selectable = data.selectable || true;
        this.images = data.images || [];
        this.edges = data.edges || new Edges();
        this.textures = data.textures || {
            base: null,
            alt: null,
            metal: null,
            baseIds: [],
            altIds: [],
            metalIds: [],
        };
        this.url = data.url || '';
        this.stats = [];
        this.name = data.name || '';
    }
}
