import { Viewport } from '@/lib';
import { useEffect, useRef } from 'react';
import clsx from 'clsx';
import './style.scss';

export interface IOutletContenxt {
    viewport: Viewport;
}

export const Viewer = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef?.current;

        if (canvas) {
        }
    }, []);

    return (
        <div className={clsx('viewer')}>
            Hello
            <canvas className="canvas" ref={canvasRef} />
        </div>
    );
};
