import { Obj3D, Viewer } from '@portfolio/model-viewer';
import { NavComp } from '../../../components';
import './index.scss';
import { getTheme } from '../../../data/theme';

export const IdeaPage = () => {
    return (
        <div className="flex flex-col  bg-gray-100 mx-auto">
            <NavComp />
            <div className="mx-auto flex flex-col items-center">
                <Viewer
                    options={{
                        height: 400,
                        envUrl: '/env/studio1k.hdr',
                        theme: getTheme('light'),
                        showFloor: false,
                        showGrid: false,
                        showAxisHelper: true,
                        restrictOrbit: false,
                        showObjectBorders: false,
                    }}
                    modelUserData={{
                        url: '/models/cornerer/protector.glb',
                        name: 'Cornerer',
                        images: [],
                        textures: null,
                    }}
                />
                {/* <img
                    src={'/images/cornerer/hero-2.png'}
                    className={`h-90 w-full object-contain bg-contain 
                    bg-center bg-no-repeat aspect-video 
                    bg-linear-to-b from-gray-200 to-gray-100`}
                /> */}

                <div className="mx-40 text-[#222]">
                    <h2 className="text-2xl font-semibold">Cornerer</h2>
                    <p className="p-0 text-lg">
                        A reusable corner guards that stay flat on boards of
                        different thicknesses, clamp with straps, and stores
                        away without needing much space.
                    </p>
                </div>
            </div>
        </div>
    );
};
