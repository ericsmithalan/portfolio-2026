import { Viewer } from '@portfolio/model-viewer';
import './index.scss';

export const WoodworkingPage = () => {
    return (
        <div className="viewer-page">
            <Viewer
                onLoaded={(viewport) => {
                    console.log('LOADED', viewport.model);
                }}
            />
        </div>
    );
};
