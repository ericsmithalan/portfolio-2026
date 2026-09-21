import clsx from 'clsx';
import React, { FC } from 'react';

type NavCompProps = {};

export const NavComp: FC<NavCompProps> = ({}) => {
    return (
        <header className="w-full z-20 top-0 inset-s-0">
            <nav className="bg-gray-950 text-gray-400">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-7xl p-4">
                    <a
                        href="https://flowbite.com"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">
                            Eric Smith
                        </span>
                    </a>
                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        <a
                            href="tel:5541251234"
                            className="text-sm  text-body hover:underline"
                        >
                            Sarasota, Fl
                        </a>
                    </div>
                </div>
            </nav>
            <nav className="bg-gray-900 text-gray-400 shadow-gray-800 drop-shadow-md">
                <div className="max-w-7xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                            <li>
                                <a
                                    href="#"
                                    className="text-heading hover:underline"
                                    aria-current="page"
                                >
                                    Cornerer
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-heading hover:underline"
                                >
                                    Golf Maintenance
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-heading hover:underline"
                                >
                                    VeteransCore
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-heading hover:underline"
                                >
                                    SmithFurnitureDesign
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};
