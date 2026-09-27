import clsx from 'clsx';
import React, { FC } from 'react';
import { Outlet, OutletProps } from 'react-router-dom';
import { NavComp } from '../nav';

type ShellCompProps = {};

export const ShellComp: FC<ShellCompProps> = ({}) => {
    return (
        <main className="flex flex-auto flex-col min-h-dvh">
            <NavComp />
            <Outlet />
        </main>
    );
};
