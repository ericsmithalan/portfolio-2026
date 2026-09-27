import clsx from 'clsx';
import React, { FC } from 'react';
import { Identity, Military, SkillsLibrary } from 'src/data/interfaces';

type SkillsCompProps = {
    data: SkillsLibrary;
};

const SkillGroup: FC<{ title: string; items: Array<string> }> = ({
    title,
    items,
}) => {
    return (
        <div className="flex flex-col">
            <div className="text-lg font-bold leading-none">{title}</div>
            <ol className="flex flex-row flex-wrap mt-2 list-none">
                {items.map((item, i) => {
                    return (
                        <li key={i} className="mr-1 badge badge-dim">
                            {item}
                        </li>
                    );
                })}
            </ol>
        </div>
    );
};

export const SkillsComp: FC<SkillsCompProps> = ({ data }) => {
    return (
        <div className="flex flex-col mb-4 gap-5">
            <SkillGroup title="Design" items={data.designAndPrototyping} />
            <SkillGroup title="Front" items={data.frontendEngineering} />
            <SkillGroup title="Back" items={data.backendToolsAndFullStack} />
            <SkillGroup title="Mobile" items={data.mobileAndWebPlatforms} />
            <SkillGroup title="3D" items={data.manufacturingAnd3D} />
            <SkillGroup
                title="Admin"
                items={data.administrativeAndOperational}
            />
        </div>
    );
};
