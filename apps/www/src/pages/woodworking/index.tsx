import { Viewer, Obj3D } from '@portfolio/model-viewer';
import './index.scss';
import { getTheme } from '../../data/theme';
import { useState } from 'react';
import { modelsUserData } from '../../data/models';

export const WoodworkingPage = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [model, setModel] = useState<Obj3D | null>(null);
    const [part, setPart] = useState<Obj3D | null>(null);

    return (
        <div className="viewer-page">
            <Viewer
                options={{
                    envUrl: '/env/studio1k.hdr',
                    theme: getTheme('light'),
                }}
                modelUserData={modelsUserData[1]}
                onModelChange={(type: string, value: Obj3D | null) => {
                    setModel(value);
                    // console.log('onModelChange', type, value);
                }}
                onLoaded={(type: string, value: boolean) => {
                    setLoading(value);
                }}
                onSelectChange={(type: string, value: Obj3D | null) => {
                    setPart(value);
                    // console.log('onSelectChange', type, value);
                }}
            />
        </div>
    );
};
