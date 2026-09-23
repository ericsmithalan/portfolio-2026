import clsx from 'clsx';
import React, { FC } from 'react';
import { Identity } from 'src/data/interfaces';

type IdentityCompProps = {
    data: Identity;
};

export const IdentityComp: FC<IdentityCompProps> = ({ data }) => {
    return (
        <div className="flex flex-col mb-7">
            <div className="">{data.name}</div>
            <div className="">{data.online.website}</div>
        </div>
    );
};
