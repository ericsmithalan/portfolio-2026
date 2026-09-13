import {
    IEdgeInfo,
    IObjectUserData,
    ITextureInfo,
    IViewportInfo,
} from '@/interface';

export class ObjectUserData implements IObjectUserData {
    edgeInfo: IEdgeInfo | null;
    textureInfo: ITextureInfo | null;
    viewportInfo: IViewportInfo | null;

    constructor(
        viewportInfo: IViewportInfo | null,
        edgeInfo: IEdgeInfo | null = null,
        textureInfo: ITextureInfo | null = null,
    ) {
        this.edgeInfo = edgeInfo;
        this.textureInfo = textureInfo;
        this.viewportInfo = viewportInfo;
    }
}
