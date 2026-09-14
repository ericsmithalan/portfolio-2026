import { IViewportEvent, Viewport } from '@/lib';
import { FC, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { isMobile } from 'react-device-detect';
import './style.scss';

export interface ViewerProps {
    children?: React.ReactNode;
    onLoaded?: (viewport: Viewport) => void;
}

export const Viewer: FC<ViewerProps> = ({ onLoaded }: ViewerProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef?.current;
        let vp: Viewport;

        const callasync = async () => {
            await vp.loadModel('/models/desk/desk1.glb').catch((e) => {
                console.log(e);
            });

            if (onLoaded) {
                onLoaded(vp);
            }
        };

        const load = (e: IViewportEvent['loading']) => {
            console.log('SDFJLJSDKLFKJSD', 'loaded', e.value);
        };

        if (canvas) {
            vp = new Viewport(canvas, isMobile);
            vp.addEventListener('loading', load);

            callasync();
        }
        return () => {
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
