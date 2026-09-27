import clsx from 'clsx';
import React, { FC } from 'react';
import { Identity, Military } from 'src/data/interfaces';

type MilitaryCompProps = {
    data: Military;
};

export const MilitaryComp: FC<MilitaryCompProps> = ({ data }) => {
    return (
        <div className="flex flex-col mb-7">
            <div className="">{data.branch}</div>
            <div className="">{data.rank}</div>
        </div>
    );
};
