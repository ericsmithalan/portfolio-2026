import clsx from 'clsx';
import React, { FC } from 'react';
import { WorkExperience } from 'src/data/interfaces';

type WorkCompProps = {
    data: Array<WorkExperience>;
};

export const WorkComp: FC<WorkCompProps> = ({ data }) => {
    return (
        <div className="flex flex-col mb-7">
            {data.map((item, i) => {
                return (
                    <div key={i} className="mb-4">
                        <div className="font-bold text-xl">{item.company}</div>
                        <div className="text-sm text-gray-500">
                            {item.location.city}, {item.location.state} |{' '}
                            {item.startDate.toLocaleDateString()}-
                            {item.endDate.toLocaleDateString()}
                        </div>

                        <div className="mt-1 mb-3">
                            {item.responsibilitiesSummary}
                        </div>
                        <ul className="mt-2 list-disc pl-8">
                            {item.resumeBullets.map((item, i) => {
                                return (
                                    <li className="mb-1" key={i}>
                                        {item}
                                    </li>
                                );
                            })}
                        </ul>
                        <div className="mt-2">
                            <div className="font-bold">User Stories</div>
                            {item.userStories.map((item, i) => {
                                return (
                                    <div className="mb-2" key={i}>
                                        {item}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
