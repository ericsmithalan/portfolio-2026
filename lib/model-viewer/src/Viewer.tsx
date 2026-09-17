import { IViewportEvent, ThemeDark, Viewport } from '@/lib';
import { FC, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { isMobile } from 'react-device-detect';
import { IModel, ITextureData, ITheme } from '@/interface';
import { Object3D } from 'three';
import './style.scss';

export interface ViewerProps {
    children?: React.ReactNode;
    modelUrl?: string;
    envUrl?: string;
    theme?: ITheme;
    textureData: ITextureData;
    onLoaded?: (type: string, value: boolean) => void;
    onModelChange?: (type: string, model: IModel | null) => void;
    onSelectChange?: (type: string, selection: Object3D | null) => void;
}

export const Viewer: FC<ViewerProps> = ({
    onLoaded,
    onModelChange,
    onSelectChange,
    textureData,
    modelUrl,
    theme,
    envUrl,
}: ViewerProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef?.current;
        let vp: Viewport;

        if (!theme) {
            theme = ThemeDark;
        }

        const callasync = async (theme: ITheme) => {
            if (modelUrl) {
                await vp.loadModel(modelUrl, theme).catch((e) => {
                    console.log(e);
                });
            }
        };

        const selectionChanve = (e: IViewportEvent['selectionChanged']) => {
            if (onSelectChange) {
                onSelectChange(e.type, e.selection);
            }
        };

        const load = (e: IViewportEvent['loading']) => {
            if (onLoaded) {
                onLoaded(e.type, e.value);
            }
        };

        const changed = (e: IViewportEvent['modelChanged']) => {
            if (onModelChange) {
                onModelChange(e.type, e.model);
            }
        };

        if (canvas) {
            vp = new Viewport(canvas, isMobile, theme, textureData, envUrl);
            vp.addEventListener('loading', load);
            vp.addEventListener('modelChanged', changed);
            vp.addEventListener('selectionChanged', selectionChanve);
            callasync(theme);
        }
        return () => {
            vp.removeEventListener('loading', load);
            vp.removeEventListener('modelChanged', changed);
            vp.removeEventListener('selectionChanged', selectionChanve);
            vp?.dispose();
        };
    }, [theme]);

    return (
        <>
            <div className={clsx('viewer')}>
                <div className="content">
                    <canvas className="canvas" ref={canvasRef} />
                </div>
            </div>
        </>
    );
};
