import {
    IViewportEvent,
    DefaultTheme,
    Viewport,
    IObjectUserData,
    ITheme,
    ObjectUserData,
} from '@/lib';
import { FC, useCallback, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { isMobile } from 'react-device-detect';

import { Material, Mesh, Object3D } from 'three';
import './style.scss';
import {
    textureToPBRMaterials,
    getObjectsById,
    disposeMaterial,
} from './utils';

export interface ViewerProps {
    modelUserData: IObjectUserData | null;
    envUrl?: string;
    theme?: ITheme;
    onLoaded?: (type: string, value: boolean) => void;
    onModelChange?: (type: string, model: Object3D | null) => void;
    onSelectChange?: (type: string, selection: Object3D | null) => void;
}

export const Viewer: FC<ViewerProps> = ({
    modelUserData,
    theme,
    envUrl,
    onLoaded,
    onModelChange,
    onSelectChange,
}: ViewerProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const loadMaterials = useCallback(
        async (vp: Viewport) => {
            if (vp.model) {
                const { textures } = vp.model.userData;
                const { environment } = vp.world.scene;

                const [base, alt, metal] = await Promise.all<Material | null>([
                    textureToPBRMaterials(environment, textures.base),
                    textureToPBRMaterials(environment, textures.alt),
                    textureToPBRMaterials(environment, textures.metal),
                ]);

                const material = base || alt || metal || null;

                getObjectsById(vp, textures.baseIds, (obj) => {
                    if (obj instanceof Mesh) {
                        disposeMaterial(obj.material);

                        if (obj.userData instanceof ObjectUserData) {
                            obj.userData.textureId = Number(
                                obj.userData.textures.base?.id,
                            );
                        }

                        obj.material = material;
                    }
                });

                disposeMaterial(material);
            }
        },
        [theme],
    );

    const initalize = useCallback(async (theme: ITheme, vp: Viewport) => {
        if (modelUserData) {
            await vp.loadModel(modelUserData, theme).catch((e) => {
                console.log(e);
            });

            if (modelUserData.textures) {
                await loadMaterials(vp);
            }
        }
    }, []);

    useEffect(() => {
        const canvas = canvasRef?.current;
        let vp: Viewport;

        if (!theme) {
            theme = DefaultTheme;
        }

        const selectionChanve = (e: IViewportEvent['selectionChanged']) => {
            if (onSelectChange) {
                onSelectChange(e.type, e.selection);
            }
        };

        const load = (e: IViewportEvent['loading']) => {
            if (onLoaded) {
                onLoaded(e.type, e.value);
            }
        };

        const changed = (e: IViewportEvent['modelChanged']) => {
            if (onModelChange) {
                onModelChange(e.type, e.model);
            }
        };

        if (canvas) {
            vp = new Viewport(canvas, isMobile, theme, envUrl);
            vp.addEventListener('loading', load);
            vp.addEventListener('modelChanged', changed);
            vp.addEventListener('selectionChanged', selectionChanve);

            initalize(theme, vp);
        }
        return () => {
            vp.removeEventListener('loading', load);
            vp.removeEventListener('modelChanged', changed);
            vp.removeEventListener('selectionChanged', selectionChanve);
            vp?.dispose();
        };
    }, []);

    return (
        <>
            <div className={clsx('viewer')}>
                <div className="content">
                    <canvas className="canvas" ref={canvasRef} />
                </div>
            </div>
        </>
    );
};
