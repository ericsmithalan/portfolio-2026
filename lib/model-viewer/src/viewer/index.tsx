import { IViewportEvent, Viewport } from '@/lib';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { isMobile } from 'react-device-detect';
import './style.scss';

export interface IOutletContenxt {
    viewport: Viewport;
}

export const Viewer = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [viewport, setViewport] = useState<Viewport>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const canvas = canvasRef?.current;
        let vp: Viewport;

        const loading = (e: IViewportEvent['loading']) => {
            setLoading(e.value);
        };

        if (canvas) {
            vp = new Viewport(canvas, isMobile);
            vp.addEventListener('loading', loading);
            setViewport(vp);
        }
    }, []);

    return (
        <>
            {!loading && (
                <div className={clsx('viewer')}>
                    <canvas className="canvas" ref={canvasRef} />
                </div>
            )}
        </>
    );
};
