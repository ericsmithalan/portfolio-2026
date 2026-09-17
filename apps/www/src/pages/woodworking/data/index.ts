import { IOutliner, ITextureData } from '@portfolio/model-viewer';
import { getMetalTextures } from './metalTexture';
import { rootOutliner } from './outliner';
import { getWoodTextures } from './woodTextures';

export const OUTLINE_DATA: Array<IOutliner> = rootOutliner;
export const TEXTURE_DATA: ITextureData = {
    woodTextures: getWoodTextures(),
    metalTextures: getMetalTextures(),
};
