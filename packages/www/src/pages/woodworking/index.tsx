import { Viewer, Obj3D, useViewport, ViewportLoadingEvent } from '@portfolio/model-viewer';
import './index.scss';
import { getTheme } from '../../data/theme';
import { getModelUserData, modelUserData } from '../../data/modelUserData';

export const WoodworkingPage = () => {
    const viewportContext = useViewport();

    return (
        <div className="viewer-page">
            {viewportContext.loading.isLoading && (
                <div className="bg-blue-950 text-white z-10 absolute">{viewportContext.loading.message}</div>
            )}
            <Viewer
                options={{
                    envUrl: '/env/studio1k.hdr',
                    theme: getTheme('light'),
                }}
                modelUserData={modelUserData[2]}
                onModelChange={(type: string, value: Obj3D | null) => {
                    // setModel(value);
                    // console.log('model changed', value);
                }}
                onLoaded={(type: string, value: ViewportLoadingEvent) => {
                    // setLoading(value);
                    // console.log('model loaded', value);
                }}
                onSelectChange={(type: string, value: Obj3D | null) => {
                    // setPart(value);
                    console.log('part selected', value);
                }}
            />
            <div className="viewer-nav">
                <ul>
                    {modelUserData.map((item, i) => {
                        return (
                            <li key={i}>
                                <a
                                    href="#"
                                    onClick={async (e) => {
                                        e.preventDefault();
                                        const m = getModelUserData(item.name);
                                        console.log('item clicked', item);
                                        viewportContext.loadModel(item);
                                    }}
                                >
                                    {item.name}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};
