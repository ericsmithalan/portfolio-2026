import { Viewer, Obj3D, useViewport, ViewportLoadingEvent } from '@portfolio/model-viewer';
import { getTheme } from '../../data/theme';
import { modelUserData } from '../../data/modelUserData';
import { PanelNavComp } from '../../components';
import clsx from 'clsx';

export const WoodworkingPage = () => {
    const { loading, selectedPart, setSelectedPart, loadModel, modelObj } = useViewport();

    return (
        <div className="flex flex-auto relative">
            {loading.isLoading && (
                <div className="bg-blue-950 text-white z-10 absolute">{loading.message}</div>
            )}
            <Viewer
                className=""
                canvasClassName=""
                options={{
                    envUrl: '/env/studio1k.hdr',
                    theme: getTheme('light'),
                    showGrid: false,
                    showFloor: true,
                    showAxisHelper: true,
                }}
                modelUserData={modelUserData[0]}
                onModelChange={(type: string, value: Obj3D | null) => {
                    // setModel(value);
                    // console.log('model changed', value);
                }}
                onLoaded={(type: string, value: ViewportLoadingEvent) => {
                    // setLoading(value);
                    // console.log('model loaded', value);
                }}
            />

            <div className="left-region absolute top-5 left-5 w-50 gap-4">
                <PanelNavComp
                    onItemClick={(e) => {
                        loadModel(e);
                    }}
                    modelUserData={modelUserData}
                    selectedName={modelObj?.obj?.name}
                />
            </div>
        </div>
    );
};
