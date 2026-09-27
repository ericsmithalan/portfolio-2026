import clsx from 'clsx';
import React, { FC } from 'react';
import { DeepThinkingAndProblemApproach } from 'src/data/interfaces';

type ThinkingCompProps = {
    data: DeepThinkingAndProblemApproach;
};

export const ThinkingComp: FC<ThinkingCompProps> = ({ data }) => {
    return (
        <div className="flex flex-col">
            <h1 className="text-4xl">Thinking</h1>

            {/* <p className="mb-2">{data.ecosystemMap.asciiFlowDiagram}</p> */}
            {/* <p className="mb-2">
                {data.ecosystemMap.nodes.map((item,i) => {
                    return (
                        <div key={i}>
                            <div>{item.label}</div>
                            <div>{item.transitionsTo}</div>
                        </div>
                    );
                })}
            </p> */}
            <div className="mb-2">
                {data.architecturalPillars.map((item, i) => {
                    return (
                        <div key={i} className="mb-7">
                            <div className="text-3xl">{item.title}</div>
                            <div className="text-lg">{item.tagline}</div>
                            <div>{item.coreParadigm}</div>
                            <div>
                                {item.manifestationParagraphs.map((item, i) => {
                                    return (
                                        <div key={i} className="mb-4">
                                            {item}
                                        </div>
                                    );
                                })}
                            </div>
                            <div>
                                {item.realWorldProofPoints.map((item, i) => {
                                    return (
                                        <div key={i}>
                                            <div className="text-xl">
                                                {item.context}
                                            </div>
                                            <p className="">{item.action}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
