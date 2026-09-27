import { CustomLogger, LogLevel } from '@/lib';

export { Viewer, type ViewerProps } from './Viewer';

export { type ITexture, type IImageResource, type TextureType } from '@/interface';
export { type IconName, type ModelName, type Obj3D } from '@/types';
export {
    Viewport,
    type IViewportEvent,
    type IObjectUserData,
    type ITheme,
    type ThemeStyle,
    type ViewportLoadingEvent,
    type IViewportOptions,
} from '@/lib';

export { useViewport } from '@/hooks';
export { ViewportProvider } from '@/context';

export const logger = new CustomLogger({
    isProduction: false,
    serviceName: 'model-viewer',
    minLevel: LogLevel.INFO,
});
