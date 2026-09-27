import { IObjectUserData, IViewportEvent, IViewportOptions, ViewportLoadingEvent } from '@/lib';
import { FC, useEffect, useRef } from 'react';

import { Object3D } from 'three';
import './style.scss';
import { useViewport } from './hooks';

export interface ViewerProps {
    options: Partial<IViewportOptions> | null;
    modelUserData: IObjectUserData | null;
    onLoaded?: (type: string, value: ViewportLoadingEvent) => void;
    onModelChange?: (type: string, model: Object3D | null) => void;
    onSelectChange?: (type: string, selection: Object3D | null) => void;
}

export const Viewer: FC<ViewerProps> = ({
    modelUserData,
    options,
    onLoaded,
    onModelChange,
    onSelectChange,
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
        <canvas
            className="canvas"
            ref={canvasRef}
            style={{ width: options?.width, height: options?.height }}
        />
    );
};
