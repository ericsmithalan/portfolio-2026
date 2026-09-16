import { IOutliner } from './IOutliner';

export interface IUserDataEdgeInfo {
    objectId: number;
    edgeId: number;
}

export interface IUserDataTextureInfo {
    textureId: number | null;
}

export interface IUserDataViewportInfo {
    selectable: boolean;
}

export interface IObjectUserData {
    outlinerInfo: IOutliner | null;
    edgeInfo: IUserDataEdgeInfo | null;
    textureInfo: IUserDataTextureInfo | null;
    viewportInfo: IUserDataViewportInfo | null;
}
