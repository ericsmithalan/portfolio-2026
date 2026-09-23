import clsx from 'clsx';
import React, { FC } from 'react';
import { VolunteerExperience, WorkExperience } from 'src/data/interfaces';

type VoluneerCompProps = {
    data: VolunteerExperience;
};

export const VoluneerComp: FC<VoluneerCompProps> = ({ data }) => {
    return (
        <div className="flex flex-col">
            <div className="">{}</div>
            <div className="">{}</div>
        </div>
    );
};
