import clsx from 'clsx';
import React, { FC } from 'react';
import { Outlet, OutletProps } from 'react-router-dom';
import { NavComp } from '../nav';
import { Obj3D } from '@portfolio/model-viewer';
import { PanelComp } from '../panel';

type PanelPartsProps = {
    modelObj: Obj3D;
    selectedId: number;
    onItemClick?: (item: Obj3D) => void;
};

export const PanelPartsComp: FC<PanelPartsProps> = ({ modelObj, selectedId, onItemClick }) => {
    return (
        <PanelComp title="Parts" className="mt-5 max-h-70">
            <ul className="flex flex-col flex-auto text-gray-700">
                {modelObj.children.map((item: Obj3D, i: number) => {
                    return (
                        <li key={i} className="flex flex-auto">
                            <a
                                title={item.name}
                                className={clsx(
                                    selectedId === item.id && 'bg-amber-600 text-white',
                                    'p-1 pl-2 pr-3',
                                    'rounded-sm',

                                    'w-40 truncate',
                                )}
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (onItemClick) {
                                        onItemClick(item);
                                    }
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
