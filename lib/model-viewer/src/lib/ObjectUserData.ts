import {
    IUserDataEdgeInfo,
    IObjectUserData,
    IUserDataTextureInfo,
    IUserDataViewportInfo,
} from '@/interface';

export class ObjectUserData implements IObjectUserData {
    edgeInfo: IUserDataEdgeInfo | null;
    textureInfo: IUserDataTextureInfo | null;
    viewportInfo: IUserDataViewportInfo | null;

    constructor(data: Partial<IObjectUserData>) {
        this.edgeInfo = data.edgeInfo || null;
        this.textureInfo = data.textureInfo || null;
        this.viewportInfo = data.viewportInfo || null;
    }
}
