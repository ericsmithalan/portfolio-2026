export interface IEdgeInfo {
    objectId: number;
    edgeId: number;
}

export interface ITextureInfo {
    textureId: number | null;
}

export interface IViewportInfo {
    selectable: boolean;
}

export interface IObjectUserData {
    edgeInfo: IEdgeInfo | null;
    textureInfo: ITextureInfo | null;
    viewportInfo: IViewportInfo | null;
}
