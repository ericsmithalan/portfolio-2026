import { ITheme } from '@/lib';

export interface IViewerOptions {
    height?: number;
    width?: number;
    showAxisHelper: boolean;
    envUrl?: string;
    theme: ITheme;
    showStats: boolean;
    isMobile: boolean;
    showGrid: boolean;
    showFloor: boolean;
    restrictOrbit: boolean;
    showObjectBorders: boolean;
}
