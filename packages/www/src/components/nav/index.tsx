import clsx from 'clsx';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

type NavCompProps = {};

export const NavComp: FC<NavCompProps> = ({}) => {
    return (
        <header className="flex flex-col w-full h-fit">
            <nav className="bg-gray-950 text-gray-400">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-7xl p-2">
                    <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">
                        Eric Smith
                    </span>

                    <div className="flex items-center">Sarasota, Fl</div>
                </div>
            </nav>
            <nav className="bg-gray-900 text-gray-400 shadow-gray-800 drop-shadow-md">
                <div className="max-w-7xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                            <li>
                                <Link
                                    to="/"
                                    className="text-heading hover:underline"
                                    aria-current="page"
                                >
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
                </div>
            </nav>
        </header>
    );
};
