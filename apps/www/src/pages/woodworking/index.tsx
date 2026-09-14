import { Viewer, Viewport } from '@portfolio/model-viewer';
import './index.scss';

export const WoodworkingPage = () => {
    return (
        <div className="viewer-page">
            <Viewer
                onLoaded={(viewport: Viewport) => {
                    // console.log('LOADED', viewport.model);
                }}
            />
        </div>
    );
};
