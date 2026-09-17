import { IOutliner } from '@portfolio/model-viewer';

export const rootOutliner: Array<IOutliner> = [
    {
        id: 1,
        modelUrl: '/models/case/model.glb',
        name: 'Sideboard',
        imageResouce: {
            primaryImg: 10,
            count: 10,
            path: '/models/case/images/',
        },
        children: [],
    },
    {
        id: 2,
        modelUrl: '/models/bunk/model.glb',
        name: 'Bunk Bed',
        imageResouce: {
            primaryImg: 14,
            count: 15,
            path: '/models/bunk/images/',
        },
        children: [],
    },
    {
        id: 3,
        modelUrl: '/models/twin/model.glb',
        name: 'Twin Bed',
        imageResouce: {
            primaryImg: 3,
            count: 3,
            path: '/models/twin/images/',
        },
        children: [],
    },
    {
        id: 4,
        modelUrl: '/models/toolbox/model.glb',
        name: 'Toolbox',
        imageResouce: {
            primaryImg: 2,
            count: 4,
            path: '/models/toolbox/images/',
        },
        children: [],
    },
    {
        id: 5,
        imageResouce: {
            primaryImg: 11,
            count: 11,
            path: '/models/chair/images/',
        },
        modelUrl: '/models/chair/model.glb',
        name: 'Windsor Chair',
        children: [],
    },
    {
        id: 6,
        name: 'Shaker Table',
        modelUrl: '/models/table/model.glb',
        imageResouce: {
            primaryImg: 2,
            count: 3,
            path: '/models/table/images/',
        },
        children: [],
    },
    {
        id: 7,
        imageResouce: {
            primaryImg: 1,
            count: 3,
            path: '/models/desk/images/',
        },
        modelUrl: '/models/desk/model.glb',
        name: 'Desk',
        children: [],
    },
];

export const outlinerIdToName = (
    outliner: Array<IOutliner> = rootOutliner,
): Record<string, string> => {
    return outliner.reduce(
        (obj, item) => Object.assign(obj, { [`${item.id}`]: item.name }),
        {},
    );
};

export const outlinerNameMapper: Record<string, string> = outlinerIdToName();
