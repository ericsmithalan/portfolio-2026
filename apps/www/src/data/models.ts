import { IObjectUserData } from '@portfolio/model-viewer';
import { getWoodTexture, woodTextures } from './woodTextures';
import { getMetalTexture } from './metalTexture';

const getImagePath = (
    dir: string,
    id: number,
): { path: string; thumb: string; id: number } => {
    return {
        id: id,
        path: `/models/${dir}/images/${id}.png`,
        thumb: `/models/${dir}/images/${id}_thumb.png`,
    };
};

export const modelsUserData: Array<IObjectUserData> = [
    {
        url: '/models/sideboard/model.glb',
        name: 'Sideboard',
        images: [
            getImagePath('sideboard', 1),
            getImagePath('sideboard', 2),
            getImagePath('sideboard', 3),
            getImagePath('sideboard', 4),
            getImagePath('sideboard', 5),
            getImagePath('sideboard', 6),
            getImagePath('sideboard', 7),
            getImagePath('sideboard', 8),
            getImagePath('sideboard', 9),
            getImagePath('sideboard', 10),
        ],
        textures: {
            base: getWoodTexture('maple'),
            baseIds: [],
            alt: getWoodTexture('walnut'),
            altIds: [],
            metal: getMetalTexture('black'),
            metalIds: [],
        },
    },
    {
        url: '/models/chair/model.glb',
        name: 'Chair',
        images: [
            getImagePath('chair', 1),
            getImagePath('chair', 2),
            getImagePath('chair', 3),
            getImagePath('chair', 4),
            getImagePath('chair', 5),
            getImagePath('chair', 6),
            getImagePath('chair', 7),
            getImagePath('chair', 8),
            getImagePath('chair', 9),
            getImagePath('chair', 10),
            getImagePath('chair', 11),
        ],
        textures: {
            base: getWoodTexture('maple'),
            baseIds: [],
            alt: null,
            altIds: [],
            metal: null,
            metalIds: [],
        },
    },
    {
        url: '/models/table/model.glb',
        name: 'Table',
        images: [
            getImagePath('table', 1),
            getImagePath('table', 2),
            getImagePath('table', 3),
        ],
        textures: {
            base: getWoodTexture('maple'),
            baseIds: [],
            alt: null,
            altIds: [],
            metal: null,
            metalIds: [],
        },
    },
    {
        url: '/models/toolbox/model.glb',
        name: 'Toolbox',
        images: [
            getImagePath('toolbox', 1),
            getImagePath('toolbox', 2),
            getImagePath('toolbox', 3),
            getImagePath('toolbox', 4),
        ],
        textures: {
            base: getWoodTexture('cherry'),
            baseIds: [],
            alt: getWoodTexture('maple'),
            altIds: [],
            metal: getMetalTexture('black'),
            metalIds: [],
        },
    },
    {
        url: '/models/twin/model.glb',
        name: 'Twin Bed',
        images: [
            getImagePath('twin', 1),
            getImagePath('twin', 2),
            getImagePath('twin', 3),
            getImagePath('twin', 4),
        ],
        textures: {
            base: getWoodTexture('white'),
            baseIds: [],
            alt: null,
            altIds: [],
            metal: null,
            metalIds: [],
        },
    },
    {
        url: '/models/desk/model.glb',
        name: 'Desk',
        images: [
            getImagePath('desk', 1),
            getImagePath('desk', 2),
            getImagePath('desk', 3),
        ],
        textures: {
            base: getWoodTexture('maple'),
            baseIds: [],
            alt: getWoodTexture('cherry'),
            altIds: [],
            metal: getMetalTexture('black'),
            metalIds: [],
        },
    },
    {
        url: '/models/bunk/model.glb',
        name: 'Bunk',
        images: [
            getImagePath('bunk', 1),
            getImagePath('bunk', 2),
            getImagePath('bunk', 3),
            getImagePath('bunk', 4),
            getImagePath('bunk', 5),
            getImagePath('bunk', 6),
            getImagePath('bunk', 7),
            getImagePath('bunk', 8),
            getImagePath('bunk', 9),
            getImagePath('bunk', 10),
            getImagePath('bunk', 11),
            getImagePath('bunk', 12),
            getImagePath('bunk', 13),
            getImagePath('bunk', 14),
            getImagePath('bunk', 15),
        ],
        textures: {
            base: getWoodTexture('white'),
            baseIds: [],
            alt: null,
            altIds: [],
            metal: getMetalTexture('black'),
            metalIds: [],
        },
    },
];
