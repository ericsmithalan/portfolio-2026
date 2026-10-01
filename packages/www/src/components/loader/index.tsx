import clsx from 'clsx';
import React, { FC } from 'react';

type LoaderCompProps = {
    children?: React.ReactNode;
    title: string;
    message?: string;
    className?: string;
};

export const LoaderComp: FC<LoaderCompProps> = ({ children, title, className }) => {
    return (
        <div className={clsx(className)}>
            <div className="text-md mb-3 font-medium uppercase">{title}</div>
            <div className="flex flex-auto overflow-y-auto overflow-x-hidden scrollbar-thin">
                {children}
            </div>
        </div>
    );
};
