import { IModel, Viewer, Obj3D } from '@portfolio/model-viewer';
import './index.scss';
import { getTheme } from './data/theme';
import { OUTLINE_DATA, TEXTURE_DATA } from './data';

export const WoodworkingPage = () => {
    return (
        <div className="viewer-page">
            <Viewer
                textureData={TEXTURE_DATA}
                theme={getTheme('light')}
                modelUrl={OUTLINE_DATA[1].modelUrl}
                envUrl="/env/studio1k.hdr"
                onModelChange={(type: string, value: IModel | null) => {
                    console.log('CHANCED', type, value);
                }}
                onLoaded={(type: string, value: boolean) => {
                    console.log('LOADED', type, value);
                }}
                onSelectChange={(type: string, value: Obj3D | null) => {
                    console.log('LOADED', type, value);
                }}
            />
        </div>
    );
};
