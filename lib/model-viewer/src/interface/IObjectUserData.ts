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
    edgeInfo: IUserDataEdgeInfo | null;
    textureInfo: IUserDataTextureInfo | null;
    viewportInfo: IUserDataViewportInfo | null;
}
