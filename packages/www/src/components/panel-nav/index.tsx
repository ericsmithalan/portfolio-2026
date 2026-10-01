import clsx from 'clsx';
import React, { FC } from 'react';
import { Outlet, OutletProps } from 'react-router-dom';
import { NavComp } from '../nav';
import { IObjectUserData, Obj3D } from '@portfolio/model-viewer';
import { PanelComp } from '../panel';
import { getModelUserData } from '../../data/modelUserData';

type PanelNavProps = {
    modelUserData: Array<IObjectUserData>;
    selectedName?: string;
    onItemClick?: (data: IObjectUserData) => void;
};

export const PanelNavComp: FC<PanelNavProps> = ({ modelUserData, selectedName, onItemClick }) => {
    return (
        <PanelComp title="Projects">
            <ul className="flex flex-col flex-auto text-gray-700">
                {modelUserData.map((item, i) => {
                    return (
                        <li key={i} className="flex flex-auto">
                            <a
                                className={clsx(
                                    selectedName &&
                                        selectedName === item.name &&
                                        'bg-amber-600 text-white',
                                    'p-1 pl-2 pr-3',
                                    'flex flex-auto rounded-sm',
                                )}
                                href="#"
                                onClick={async (e) => {
                                    e.preventDefault();
                                    const m = getModelUserData(item.name);

                                    if (onItemClick) {
                                        onItemClick(m);
                                    }
                                    // loadModel(item);
                                }}
                            >
                                {item.name}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </PanelComp>
    );
};
