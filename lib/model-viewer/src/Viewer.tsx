import { IViewportEvent, ThemeDark, Viewport } from '@/lib';
import { FC, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { isMobile } from 'react-device-detect';
import './style.scss';
import { IModel, ITheme } from '@/interface';
import { Object3D } from 'three';

export interface ViewerProps {
    children?: React.ReactNode;
    modelUrl?: string;
    envUrl?: string;
    theme?: ITheme;
    onLoaded?: (type: string, value: boolean) => void;
    onModelChange?: (type: string, model: IModel | null) => void;
    onPartSelectionChange?: (type: string, selection: Object3D | null) => void;
}

export const Viewer: FC<ViewerProps> = ({
    onLoaded,
    onModelChange,
    onPartSelectionChange,
    modelUrl,
    theme,
    envUrl,
}: ViewerProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef?.current;
        let vp: Viewport;

        const callasync = async () => {
            if (modelUrl) {
                await vp.loadModel(modelUrl).catch((e) => {
                    console.log(e);
                });
            }
        };

        const selectionChanve = (e: IViewportEvent['selectionChanged']) => {
            if (onPartSelectionChange) {
                onPartSelectionChange(e.type, e.selection);
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
            if (!theme) {
                theme = ThemeDark;
            }

            vp = new Viewport(canvas, isMobile, theme, envUrl);
            vp.addEventListener('loading', load);
            vp.addEventListener('modelChanged', changed);
            vp.addEventListener('selectionChanged', selectionChanve);
            callasync();
        }
        return () => {
            vp.removeEventListener('loading', load);
            vp.removeEventListener('modelChanged', changed);
            vp.removeEventListener('selectionChanged', selectionChanve);
            vp?.dispose();
        };
    }, []);

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
