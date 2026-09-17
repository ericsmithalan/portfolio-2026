import { ITheme, ThemeStyle } from '@portfolio/model-viewer';

export const ThemeLight: ITheme = {
    world: {
        backgroundColor: '#F8F8FF',
        fogColor: '#F8F8FF',
        fogDensity: 0.08,
    },
    grid: {
        lineColor: '#cccccc',
        opacity: 0.2,
        size: 100,
        divisions: 100,
    },
    outlineEffect: {
        clearColor: 0xc2883d,
        visibleEdgeColor: 0xc2883d,
        hiddenEdgeColor: 0xc2883d,
        edgeGlow: 0,
        edgeThickness: 3,
        edgeStrength: 10,
        pulsePeriod: 0,
    },
    edges: {
        color: '#222222',
        lineWidth: 1,
    },
};

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
        edgeThickness: 3,
        edgeStrength: 10,
        pulsePeriod: 0,
    },
    edges: {
        color: '#222222',
        lineWidth: 1,
    },
};

export const getTheme = (style: ThemeStyle) => {
    if (style === 'dark') {
        return ThemeDark;
    }

    return ThemeLight;
};
