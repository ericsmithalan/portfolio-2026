import { ITheme } from '@/interface';

export const ThemeDark: ITheme = {
    world: {
        backgroundColor: '#222222',
        fogColor: '#222222',
        fogDensity: 0.1,
    },
    grid: {
        lineColor: '#999999',
        opacity: 0.2,
        size: 100,
        divisions: 100,
    },
    outlineEffect: {
        clearColor: '#000000',
        visibleEdgeColor: 0xc2883d,
        hiddenEdgeColor: 0xc2883d,
        edgeGlow: 0,
        edgeThickness: 2,
        edgeStrength: 10,
        pulsePeriod: 0,
    },
    edges: {
        color: 'black',
        lineWidth: 3,
    },
};
