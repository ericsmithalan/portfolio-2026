export interface IObjectUserData {
    objectId: number | null;
    edgeId: number | null;
    textureId: number | null;
    selectable: boolean;
}

export class ObjectUserData implements IObjectUserData {
    objectId: number | null;
    edgeId: number | null;
    textureId: number | null;
    selectable: boolean;

    constructor(data: Partial<IObjectUserData>) {
        this.objectId = data.objectId || null;
        this.edgeId = data.edgeId || null;
        this.textureId = data.textureId || null;
        this.selectable = data.selectable || true;
    }
}
