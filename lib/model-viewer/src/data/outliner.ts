import { IOutliner } from "../interface";

export const rootOutliner: Array<IOutliner> = [
    {
        id: 10984,
        modelUrl: "/models/case-1/final.glb",
        name: "Sideboard",
        imageResouce: {
            primaryImg: 10,
            count: 10,
            path: "/models/case-1/images/",
        },
        children: [],
    },
    {
        id: 7564,
        modelUrl: "/models/bunk/bunks1.glb",
        name: "Bunk Bed",
        imageResouce: {
            primaryImg: 14,
            count: 15,
            path: "/models/bunk/images/",
        },
        children: [],
    },
    {
        id: 7921,
        modelUrl: "/models/twin/twin-Portfolio.glb",
        name: "Twin Bed",
        imageResouce: {
            primaryImg: 3,
            count: 3,
            path: "/models/twin/images/",
        },
        children: [],
    },
    {
        id: 8888,
        modelUrl: "/models/toolbox/tool-box.glb",
        name: "Toolbox",
        imageResouce: {
            primaryImg: 2,
            count: 4,
            path: "/models/toolbox/images/",
        },
        children: [],
    },
    {
        id: 987,
        imageResouce: {
            primaryImg: 11,
            count: 11,
            path: "/models/windsor-chair/images/",
        },
        modelUrl: "/models/windsor-chair/chair.glb",
        name: "Windsor Chair",
        children: [],
    },
    {
        id: 3320,
        name: "Shaker Table",
        modelUrl: "/models/shaker-table/shaker-table.glb",
        imageResouce: {
            primaryImg: 2,
            count: 3,
            path: "/models/shaker-table/images/",
        },
        children: [],
    },
    {
        id: 11001,
        imageResouce: {
            primaryImg: 1,
            count: 3,
            path: "/models/desk/images/",
        },
        modelUrl: "/models/desk/desk1.glb",
        name: "Desk",
        children: [],
    },
];

export const outlinerIdToName = (
    outliner: Array<IOutliner> = rootOutliner,
): Record<string, string> => {
    return outliner.reduce((obj, item) => Object.assign(obj, { [`${item.id}`]: item.name }), {});
};

export const outlinerNameMapper: Record<string, string> = outlinerIdToName();
