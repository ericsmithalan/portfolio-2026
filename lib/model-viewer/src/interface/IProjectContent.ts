import { Vector3 } from 'three';
import { IStat } from '.';

export interface IProjectContent {
    id: string;
    description: string;
    startDate: Date;
    endDate: Date;
    stats: IStat;
}
