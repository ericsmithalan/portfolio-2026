import { IViewportEvent, Viewport, IObjectUserData } from '@/lib';
import { FC, useCallback, useEffect, useRef } from 'react';

import { Material, Mesh, Object3D } from 'three';
import './style.scss';
import {
    textureToPBRMaterials,
    getObjectsById,
    disposeMaterial,
} from './utils';
import { IViewerOptions } from './interface';

export interface ViewerProps {
    options?: Partial<IViewerOptions>;
    modelUserData: IObjectUserData | null;
    onLoaded?: (type: string, value: boolean) => void;
    onModelChange?: (type: string, model: Object3D | null) => void;
    onSelectChange?: (type: string, selection: Object3D | null) => void;
}

export const Viewer: FC<ViewerProps> = ({
    modelUserData,
    options,
    onLoaded,
    onModelChange,
    onSelectChange,
}: ViewerProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const setMaterials = async (vp: Viewport) => {
        if (vp.model) {
            const { textures } = vp.model.userData;
            const { environment } = vp.world.scene;

            const [base, alt, metal] = await Promise.all<Material | null>([
                textureToPBRMaterials(environment, textures.base),
                textureToPBRMaterials(environment, textures.alt),
                textureToPBRMaterials(environment, textures.metal),
            ]);

            if (base) {
                getObjectsById(vp, textures.baseIds, (obj) => {
                    if (obj instanceof Mesh) {
                        disposeMaterial(obj.material);
                        obj.material = base;
                    }
                });
            }

            if (alt) {
                getObjectsById(vp, textures.altIds, (obj) => {
                    if (obj instanceof Mesh) {
                        disposeMaterial(obj.material);
                        obj.material = alt;
                    }
                });
            }

            if (metal) {
                getObjectsById(vp, textures.metalIds, (obj) => {
                    if (obj instanceof Mesh) {
                        disposeMaterial(obj.material);
                        obj.material = metal;
                    }
                });
            }

            disposeMaterial(base);
            disposeMaterial(alt);
            disposeMaterial(metal);
        }
    };

    const initalize = useCallback(async (vp: Viewport) => {
        if (modelUserData) {
            await vp.loadModel(modelUserData).catch((e) => {
                console.log(e);
            });

            if (modelUserData.textures) {
                await setMaterials(vp);
            }
        }
    }, []);

    useEffect(() => {
        const canvas = canvasRef?.current;
        let vp: Viewport;

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
            vp = new Viewport(canvas, options);
            vp.addEventListener('loading', load);
            vp.addEventListener('modelChanged', changed);
            vp.addEventListener('selectionChanged', selectionChanve);

            initalize(vp);
        }
        return () => {
            vp.removeEventListener('loading', load);
            vp.removeEventListener('modelChanged', changed);
            vp.removeEventListener('selectionChanged', selectionChanve);
            vp?.dispose();
        };
    }, []);

    return (
        <canvas
            className="canvas"
            ref={canvasRef}
            style={{ width: options?.width, height: options?.height }}
        />
    );
};
