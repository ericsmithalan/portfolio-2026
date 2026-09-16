import { Viewer, Viewport } from '@portfolio/model-viewer';
import './index.scss';

export const WoodworkingPage = () => {
    return (
        <div className="viewer-page">
            <Viewer
                modelUrl="/models/case/model.glb"
                envUrl="/env/studio1k.hdr"
                onModelChanged={(type: string, value: boolean) => {
                    console.log('CHANCED', type, value);
                }}
                onLoaded={(type: string, value: boolean) => {
                    console.log('LOADED', type, value);
                }}
                onPartSelectionChange={(type: string, value: boolean) => {
                    console.log('LOADED', type, value);
                }}
            />
        </div>
    );
};
