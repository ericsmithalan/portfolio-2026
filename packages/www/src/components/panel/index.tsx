import clsx from 'clsx';
import React, { FC } from 'react';

type PanelCompProps = {
    children?: React.ReactNode;
    title?: string;
};

export const PanelComp: FC<PanelCompProps> = ({ children, title }) => {
    return (
        <div className="bg-gray-900/10 text-gray-800 p-3 rounded-lg backdrop-blur-sm shadow-md border-gray-600/10 border-2">
            <div className="text-2xl">{title}</div>
            <div>{children}</div>
        </div>
    );
};
