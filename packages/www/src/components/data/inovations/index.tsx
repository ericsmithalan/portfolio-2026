import clsx from 'clsx';
import React, { FC } from 'react';
import { InventionsAndConcepts } from 'src/data/interfaces';

type InovationsCompProps = {
    data: InventionsAndConcepts;
};

export const InovationsComp: FC<InovationsCompProps> = ({ data }) => {
    const inovations = [
        ...data.hardwareInventions,
        ...data.softwareApplications,
    ];
    return (
        <div className="flex flex-col">
            <div className="text-4xl mb-3">Inovations</div>
            {inovations.map((item, i) => {
                return (
                    <div key={i} className="mb-6">
                        <div className="font-bold text-xl">{item.title}</div>
                        <div className="text-sm text-gray-400">
                            {item.tagline}
                        </div>
                        <div className="mt-3">
                            <div className="text-xl">Origion</div>
                            {item.originStory.map((story, n) => {
                                return (
                                    <div key={n} className="mb-1">
                                        {story}
                                    </div>
                                );
                            })}
                        </div>
                        <div className="mt-3">
                            <div className="text-xl">Requirements</div>
                            <ol className="mt-2 list-disc pl-5">
                                {item.initialRequirements.map((story, n) => {
                                    return (
                                        <li key={n} className="mb-1">
                                            {story}
                                        </li>
                                    );
                                })}
                            </ol>
                        </div>
                        <div className="mt-3">
                            <div className="text-xl">Features</div>
                            <ol className="mt-2 list-disc pl-5">
                                {item.extendedFeatures.map((story, n) => {
                                    return (
                                        <li key={n} className="mb-1">
                                            {story}
                                        </li>
                                    );
                                })}
                            </ol>
                        </div>
                        <div className="mt-3">
                            <div className="text-xl">Development</div>
                            {item.developmentProcess.map((story, n) => {
                                return (
                                    <div key={n} className="mb-1">
                                        {story}
                                    </div>
                                );
                            })}
                        </div>
                        <div className="mt-3">
                            <div className="text-xl">Challenges</div>
                            {item.engineeringChallenges.map((story, n) => {
                                return (
                                    <div key={n} className="mb-1">
                                        {story}
                                    </div>
                                );
                            })}
                        </div>
                        <div className="mt-3">
                            <div className="text-xl">Outcomes</div>
                            {item.productOutcomes.map((story, n) => {
                                return (
                                    <div key={n} className="mb-1">
                                        {story}
                                    </div>
                                );
                            })}
                        </div>
                        <div className="">
                            <div className="text-xl">Philosophy</div>
                            <div className="">{item.designPhilosophy}</div>
                        </div>
                        <div className="">
                            <div className="text-xl">Marketing</div>
                            <div className="">
                                {item.marketStrategy?.brandingAndIdentity}
                            </div>
                            <div className="">
                                {item.marketStrategy?.packagingConcept}
                            </div>
                            <div className="">
                                {item.marketStrategy?.pricingAnalysis}
                            </div>
                        </div>
                        <div className="">
                            <div className="text-xl">Status</div>
                            <div className="">{item.currentStatus}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
