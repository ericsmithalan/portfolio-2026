import { Viewer, Obj3D, useViewport, ViewportLoadingEvent } from '@portfolio/model-viewer';
import { getTheme } from '../../data/theme';
import { getModelUserData, modelUserData } from '../../data/modelUserData';
import { PanelComp } from '../../components';
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
                <PanelComp title="Projects">
                    <ul className="flex flex-col flex-auto text-gray-700">
                        {modelUserData.map((item, i) => {
                            return (
                                <li key={i} className="flex flex-auto">
                                    <a
                                        className={clsx(
                                            modelObj?.obj &&
                                                modelObj.obj.name === item.name &&
                                                'bg-amber-600 text-white',
                                            'p-1 pl-2 pr-3',
                                            'flex flex-auto rounded-sm',
                                        )}
                                        href="#"
                                        onClick={async (e) => {
                                            e.preventDefault();
                                            const m = getModelUserData(item.name);
                                            loadModel(item);
                                        }}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </PanelComp>
                {modelObj?.obj && (
                    <PanelComp title="Parts" className="mt-5 max-h-70">
                        <ul className="flex flex-col flex-auto text-gray-700">
                            {modelObj.obj.children.map((item: Obj3D, i: number) => {
                                return (
                                    <li key={i} className="flex flex-auto">
                                        <a
                                            title={item.name}
                                            className={clsx(
                                                selectedPart?.id === item.id &&
                                                    'bg-amber-600 text-white',
                                                'p-1 pl-2 pr-3',
                                                'rounded-sm',

                                                'w-40 truncate',
                                            )}
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setSelectedPart(item.id);
                                            }}
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </PanelComp>
                )}
            </div>
        </div>
    );
};
