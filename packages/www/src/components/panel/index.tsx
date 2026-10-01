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
                'relative z-40',
                'max-w-sm w-full p-6 rounded-md shadow-lg shadow-gray-200 backdrop-blur-lg border ',
                'shadow-[inset_0_0_10px_4px_rgba(59,130,246,0.5)] ring-inset ring-2 ring-white ',
                'border-gray-600/20 ',
                'bg-gradient-to-br from-white to-white/10 [background-image:linear-gradient(to_bottom_right,rgba(255,255,255,0.4),rgba(255,255,255,0.1)),linear-gradient(to_bottom_right,rgba(255,255,255,0.7),rgba(255,255,255,0.1))] [background-clip:padding-box,border-box][background-origin:padding-box,border-box]',

                className,
            )}
        >
            <div className="text-md mb-3 font-medium uppercase">{title}</div>
            <div className="flex flex-auto overflow-y-auto overflow-x-hidden scrollbar-thin">
                {children}
            </div>
        </div>
    );
};
