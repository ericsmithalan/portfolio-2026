import { IImageResource } from './IImageResource';

export interface IOutliner {
    id: number;
    name: string;
    modelUrl?: string;
    imageResouce?: IImageResource;
    children?: Array<IOutliner>;
}
