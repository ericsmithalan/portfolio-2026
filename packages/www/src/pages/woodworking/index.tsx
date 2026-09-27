import { Viewer, Obj3D, useViewport, ViewportLoadingEvent } from '@portfolio/model-viewer';
import './index.scss';
import { getTheme } from '../../data/theme';
import { getModelUserData, modelUserData } from '../../data/modelUserData';
import { PanelComp } from '../../components';
import clsx from 'clsx';

export const WoodworkingPage = () => {
    const { viewport, loading, loadModel, modelObj } = useViewport();

    return (
        <div className="flex flex-auto">
            {/* {loading.isLoading && (
                <div className="bg-blue-950 text-white z-10 absolute">{loading.message}</div>
            )} */}
            <Viewer
                className=""
                canvasClassName=""
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

            {/* <div className="left-region"> */}
            {/* <PanelComp title="Projects">
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
                </PanelComp> */}
            {/* <PanelComp title="Projects">
                    <ul className="flex flex-col flex-auto text-gray-700">
                        {modelObj?.obj?.children.map((item, i) => {
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
                                        onClick={async (e) => {}}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </PanelComp> */}
            {/* </div> */}
        </div>
    );
};
