import { IViewportEvent, DefaultTheme, Viewport, ObjectUserData } from '@/lib';
import { FC, useCallback, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { isMobile } from 'react-device-detect';
import { IModel, IObjectMaterialMapper, ITheme } from '@/interface';
import { Material, Mesh, Object3D } from 'three';
import './style.scss';

import {
    disposeMaterial,
    createTextureMaterials,
    getObjectsById,
} from './utils';

export interface ViewerProps {
    model: IModel | null;
    envUrl?: string;
    theme?: ITheme;
    onLoaded?: (type: string, value: boolean) => void;
    onModelChange?: (type: string, model: IModel | null) => void;
    onSelectChange?: (type: string, selection: Object3D | null) => void;
    onMaterialChange?: (type: string, selection: Material | null) => void;
}

export const Viewer: FC<ViewerProps> = ({
    model,
    theme,
    envUrl,
    onLoaded,
    onModelChange,
    onSelectChange,
    onMaterialChange,
}: ViewerProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const loadMaterials = useCallback(
        async (vp: Viewport, materialObj?: IObjectMaterialMapper) => {
            if (materialObj) {
                const materials = await createTextureMaterials(
                    vp.world.scene.environment,
                    materialObj.texture.pbr?.diffuse,
                );

                materialObj.material = materials;

                getObjectsById(vp, materialObj.objects, (obj) => {
                    if (obj instanceof Mesh) {
                        disposeMaterial(obj.material);

                        if (obj.userData instanceof ObjectUserData) {
                            obj.userData.textureId = Number(
                                materialObj.texture.id,
                            );
                        }

                        obj.material = materials;
                        if (onMaterialChange) {
                            onMaterialChange('materialChange', materials);
                        }
                    }
                });

                disposeMaterial(materials);
            }
        },
        [],
    );

    useEffect(() => {
        const canvas = canvasRef?.current;
        let vp: Viewport;

        if (!theme) {
            theme = DefaultTheme;
        }

        const callasync = async (theme: ITheme, vp: Viewport) => {
            if (model) {
                await vp.loadModel(model, theme).catch((e) => {
                    console.log(e);
                });

                const mat = model.materials?.get('maple');

                if (mat) {
                    await loadMaterials(vp, mat);
                }
            }
        };

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

            callasync(theme, vp);
        }
        return () => {
            vp.removeEventListener('loading', load);
            vp.removeEventListener('modelChanged', changed);
            vp.removeEventListener('selectionChanged', selectionChanve);
            vp?.dispose();
        };
    }, [theme]);

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
