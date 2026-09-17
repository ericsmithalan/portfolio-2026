import { IModel, Viewer, Obj3D } from '@portfolio/model-viewer';
import './index.scss';
import { getTheme } from './data/theme';
import { OUTLINE_DATA } from './data';
import { useEffect, useState } from 'react';
import { models } from './data/models';

export const WoodworkingPage = () => {
    const [model, setModel] = useState<IModel | null>(null);
    const [part, setPart] = useState<Obj3D | null>(null);

    return (
        <div className="viewer-page">
            <Viewer
                theme={getTheme('light')}
                model={models[0]}
                envUrl="/env/studio1k.hdr"
                onModelChange={(type: string, value: IModel | null) => {
                    setModel(value);
                    console.log('onModelChange', type, value);
                }}
                onLoaded={(type: string, value: boolean) => {
                    console.log('onLoaded', type, value);
                }}
                onSelectChange={(type: string, value: Obj3D | null) => {
                    setPart(value);
                    console.log('onSelectChange', type, value);
                }}
            />
        </div>
    );
};
