export type ThemeStyle = 'light' | 'dark';

export interface ITheme {
    world: {
        backgroundColor: string;
        fogColor: string;
        fogDensity: number;
    };
    grid: {
        lineColor: string;
        opacity: number;
        size: number;
        divisions: number;
    };
}
