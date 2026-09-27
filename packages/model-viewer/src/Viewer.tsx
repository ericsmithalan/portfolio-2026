import { IObjectUserData, IViewportEvent, IViewportOptions, ViewportLoadingEvent } from '@/lib';
import { CSSProperties, FC, useEffect, useRef } from 'react';

import { Object3D } from 'three';
import './style.scss';
import { useViewport } from './hooks';
import clsx from 'clsx';

export interface ViewerProps {
    options: Partial<IViewportOptions> | null;
    modelUserData: IObjectUserData | null;
    className?: string;
    canvasClassName?: string;
    style?: CSSProperties;
    canvasStyle?: CSSProperties;
    onLoaded?: (type: string, value: ViewportLoadingEvent) => void;
    onModelChange?: (type: string, model: Object3D | null) => void;
    onSelectChange?: (type: string, selection: Object3D | null) => void;
}

export const Viewer: FC<ViewerProps> = ({
    modelUserData,
    options,
    className,
    style,
    canvasStyle,
    onLoaded,
    onModelChange,
    onSelectChange,
    canvasClassName,
}: ViewerProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const viewportContext = useViewport();

    useEffect(() => {
        const selectionChange = (e: IViewportEvent['selectionChanged']) => {
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

        if (viewportContext.viewport) {
            viewportContext.viewport.addEventListener('loading', load);
            viewportContext.viewport.addEventListener('modelChanged', changed);
            viewportContext.viewport.addEventListener('selectionChanged', selectionChange);
        }

        return () => {
            if (viewportContext.viewport) {
                viewportContext.viewport.removeEventListener('loading', load);
                viewportContext.viewport.removeEventListener('modelChanged', changed);
                viewportContext.viewport.removeEventListener('selectionChanged', selectionChange);
                viewportContext.viewport.dispose();
            }
        };
    }, [viewportContext.viewport]);

    useEffect(() => {
        if (canvasRef.current) {
            viewportContext.createViewport(canvasRef.current, options, modelUserData);
        }
    }, [canvasRef]);

    return (
        <div style={style} className={clsx('model-viewer', className)}>
            <canvas
                style={canvasStyle}
                className={clsx('viewer-canvas', canvasClassName)}
                ref={canvasRef}
            />
        </div>
    );
};
