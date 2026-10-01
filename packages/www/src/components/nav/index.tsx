import clsx from 'clsx';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

type NavCompProps = {};

export const NavComp: FC<NavCompProps> = ({}) => {
    return (
        <header className="flex flex-row w-full h-fit  text-gray-700 ">
            <div className="pl-8 pt-4 text-2xl flex flex-auto flex-wrap items-center w-full">
                <span className="whitespace-nowrap font-black">Eric Smith</span>
            </div>
            <div className="flex items-center text-lg pt-2 pr-8">
                <ul className="flex flex-row space-x-8">
                    <li>
                        <Link to="/" className="text-heading hover:underline" aria-current="page">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/woodworking"
                            className="text-heading hover:underline"
                            aria-current="page"
                        >
                            Woodworking
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};
