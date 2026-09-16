import { ITheme } from '@/interface';

export const ThemeLight: ITheme = {
    world: {
        backgroundColor: '#F8F8FF',
        fogColor: '#F8F8FF',
        fogDensity: 0.08,
    },
    grid: {
        lineColor: '#999999',
        opacity: 0.2,
        size: 100,
        divisions: 100,
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
};
