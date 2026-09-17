import { IModel } from '@portfolio/model-viewer';
import { getMetalTextures } from './metalTexture';
import { models } from './models';
import { getWoodTextures } from './woodTextures';

export const OUTLINE_DATA: Array<IModel> = models;
export const TEXTURE_DATA = {
    woodTextures: getWoodTextures(),
    metalTextures: getMetalTextures(),
};
