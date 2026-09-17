import { IModel } from '@portfolio/model-viewer';

const getImagePath = (
    dir: string,
    name: string,
): { path: string; thumb: string } => {
    return {
        path: `/models/${dir}/images/${name}.png`,
        thumb: `/models/${dir}/images/${name}_thumb.png`,
    };
};

export const models: Array<IModel> = [
    {
        id: 1,
        url: '/models/sideboard/model.glb',
        name: 'Sideboard',
        images: [
            {
                id: 1,
                ...getImagePath('sideboard', '1'),
            },
            {
                id: 2,
                ...getImagePath('sideboard', '2'),
            },
            {
                id: 3,
                ...getImagePath('sideboard', '3'),
            },
            {
                id: 4,
                ...getImagePath('sideboard', '4'),
            },
            {
                id: 5,
                ...getImagePath('sideboard', '5'),
            },
            {
                id: 6,
                ...getImagePath('sideboard', '6'),
            },
            {
                id: 7,
                ...getImagePath('sideboard', '7'),
            },
            {
                id: 8,
                ...getImagePath('sideboard', '8'),
            },
            {
                id: 9,
                ...getImagePath('sideboard', '9'),
            },
            {
                id: 10,
                ...getImagePath('sideboard', '10'),
            },
        ],
        textures: [],
        children: [],
        object: null,
        edges: null,
        materials: null,
        stats: [],
    },
];
