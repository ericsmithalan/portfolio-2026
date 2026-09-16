import { ColorRepresentation } from 'three';

export type ThemeStyle = 'light' | 'dark';

export interface ITheme {
    world: {
        backgroundColor: ColorRepresentation;
        fogColor: ColorRepresentation;
        fogDensity: number;
    };
    grid: {
        lineColor: ColorRepresentation;
        opacity: number;
        size: number;
        divisions: number;
    };
    outlineEffect: {
        clearColor: ColorRepresentation;
        visibleEdgeColor: ColorRepresentation;
        hiddenEdgeColor: ColorRepresentation;
    };
    edges: {
        color: ColorRepresentation;
        lineWidth: number;
    };
}
