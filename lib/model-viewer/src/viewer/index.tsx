import { Viewport } from '@/lib';
import { useRef } from 'react';
import clsx from 'clsx';
import './style.scss';

export interface IOutletContenxt {
    viewport: Viewport;
}

export const Viewer = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    return (
        <div className={clsx('viewer')}>
            Hello
            <canvas className="canvas" ref={canvasRef} />
        </div>
    );
};
