import { IViewportEvent, Viewport } from '@/lib';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { isMobile } from 'react-device-detect';
import './style.scss';

export interface ViewerProps {
    children?: React.ReactNode;
}

export const Viewer = ({ children }: ViewerProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
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
        }
    }, []);

    return (
        <>
            {!loading && (
                <div className={clsx('viewer')}>
                    <div className="content">
                        {children}
                        <canvas className="canvas" ref={canvasRef} />
                    </div>
                </div>
            )}
        </>
    );
};
