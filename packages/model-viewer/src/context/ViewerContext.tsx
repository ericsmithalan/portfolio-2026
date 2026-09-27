import { DefaultTheme, IObjectUserData, ViewportLoadingEvent, Viewport, IViewportOptions } from '@/lib';
import { textureToPBRMaterials, getObjectsById, disposeMaterial } from '@/utils';
import React, { useEffect, useState } from 'react';
import { Material, Mesh, Object3D, Object3DEventMap } from 'three';

type ModelObj = {
    userData: IObjectUserData | null;
    obj: Object3D<Object3DEventMap> | null;
};

export interface ViewportState {
    loading: ViewportLoadingEvent;
    viewport: Viewport | null;
    modelObj: ModelObj | null;
    createViewport: (
        canvasRef: HTMLCanvasElement | null,
        options: Partial<IViewportOptions> | null,
        modelData: IObjectUserData | null,
    ) => void;
    loadModel: (data: IObjectUserData) => Promise<void>;
}

export const ViewportContext = React.createContext<ViewportState>({} as ViewportState);

interface ViewportProviderProps {
    children?: React.ReactNode;
}

const defaultOptions = {
    isMobile: false,
    height: undefined,
    width: undefined,
    showAxisHelper: true,
    showStats: false,
    theme: DefaultTheme,
    cameraZoom: 2,
    showGrid: true,
    showFloor: true,
    restrictOrbit: true,
    showObjectBorders: true,
};

export const ViewportProvider = ({ children }: ViewportProviderProps) => {
    const [viewport, setViewport] = useState<Viewport | null>(null);
    const [modelObj, setModelObj] = useState<ModelObj | null>(null);
    const [loading, setLoading] = useState<ViewportLoadingEvent>({
        isLoading: false,
        message: '',
    });

    const loadMaterials = async (): Promise<void> => {
        if (viewport && viewport.model) {
            const { textures } = viewport.model.userData;
            const { environment } = viewport.world.scene;

            setLoading({
                isLoading: true,
                message: `Loading Textures`,
            });

            const [base, alt, metal] = await Promise.all<Material | null>([
                textureToPBRMaterials(environment, textures.base),
                textureToPBRMaterials(environment, textures.alt),
                textureToPBRMaterials(environment, textures.metal),
            ]);

            if (base) {
                getObjectsById(viewport, textures.baseIds, (obj) => {
                    if (obj instanceof Mesh) {
                        disposeMaterial(obj.material);
                        obj.material = base;
                    }
                });
            }

            if (alt) {
                getObjectsById(viewport, textures.altIds, (obj) => {
                    if (obj instanceof Mesh) {
                        disposeMaterial(obj.material);
                        obj.material = alt;
                    }
                });
            }

            if (metal) {
                getObjectsById(viewport, textures.metalIds, (obj) => {
                    if (obj instanceof Mesh) {
                        disposeMaterial(obj.material);
                        obj.material = metal;
                    }
                });
            }

            disposeMaterial(base);
            disposeMaterial(alt);
            disposeMaterial(metal);
            setLoading({
                isLoading: false,
                message: 'materials loaded',
            });
        }
    };

    const createViewport = (
        canvasRef: HTMLCanvasElement | null,
        options: Partial<IViewportOptions> | null,
        modelData: IObjectUserData | null,
    ) => {
        if (canvasRef) {
            const ops = {
                ...defaultOptions,
                ...(options || {}),
            };

            const vp = new Viewport(canvasRef, ops);

            setViewport(vp);

            setModelObj({
                obj: null,
                userData: modelData,
            });
        } else {
            console.log('ViewwerContext > create > canvaseRef', canvasRef);
        }
    };

    const loadModel = async (data: IObjectUserData | null) => {
        if (data) {
            setLoading({
                isLoading: true,
                message: `Loading ${data.name}`,
            });
            if (viewport) {
                const results = await viewport.loadModel(data).catch((e) => {
                    console.log('ERROR: Viewer Context > loadModel > viewport.loadModel ', e);
                });

                if (results && results !== modelObj?.obj) {
                    setModelObj({
                        obj: results,
                        userData: data,
                    });
                }
            } else {
                if (modelObj) {
                    setModelObj(null);
                }
            }

            setLoading({
                isLoading: true,
                message: '',
            });
        }
    };

    useEffect(() => {
        if (!modelObj?.obj && modelObj?.userData) {
            loadModel(modelObj.userData);
        }
    }, [modelObj]);

    useEffect(() => {
        if (modelObj?.obj) {
            loadMaterials();
        }
    }, [modelObj?.obj]);

    return (
        <ViewportContext.Provider
            value={{
                createViewport: createViewport,
                loadModel: loadModel,
                loading: loading,
                viewport: viewport,
                modelObj: modelObj || null,
            }}
        >
            {children}
        </ViewportContext.Provider>
    );
};
