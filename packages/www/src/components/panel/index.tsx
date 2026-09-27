import clsx from 'clsx';
import React, { FC } from 'react';

type PanelCompProps = {
    children?: React.ReactNode;
    title?: string;
    className?: string;
};

export const PanelComp: FC<PanelCompProps> = ({ children, title, className }) => {
    return (
        <div
            className={clsx(
                'flex flex-col',
                'bg-gray-900/10 text-gray-800  border-gray-600/10 border-2',
                'p-3 rounded-lg backdrop-blur-sm shadow-md',
                className,
            )}
        >
            <div className="text-xl mb-3">{title}</div>
            <div className="flex flex-auto overflow-y-auto overflow-x-hidden scrollbar-thin">
                {children}
            </div>
        </div>
    );
};
