import { IOutliner, ITexture } from '@/interface';
import { getAllMetalTextures } from './metalTexture';
import { rootOutliner } from './outliner';
import { getAllWoodTextures } from './woodTextures';

export interface IData {
    woodTextures: Array<ITexture>;
    metalTextures: Array<ITexture>;
    rootOutliner: Array<IOutliner>;
}

const wood = getAllWoodTextures();
const metal = getAllMetalTextures();

export const DATA: IData = {
    woodTextures: wood,
    metalTextures: metal,
    rootOutliner: rootOutliner,
};
