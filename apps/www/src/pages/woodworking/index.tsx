import { Viewer } from '@portfolio/model-viewer';
import './index.scss';

export const WoodworkingPage = () => {
    const localModel = '/models/bunk/bunks1.glb';

    return (
        <div className="viewer-page">
            <Viewer
                modelUrl={localModel}
                onLoaded={(viewport) => {
                    console.log('LOADED', viewport.model);
                }}
            />
        </div>
    );
};
