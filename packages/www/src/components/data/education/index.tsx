import clsx from 'clsx';
import React, { FC } from 'react';
import { EducationLibrary } from 'src/data/interfaces';

type EducationCompProps = {
    data: EducationLibrary;
};

export const EducationComp: FC<EducationCompProps> = ({ data }) => {
    return (
        <div className="flex flex-col mb-7">
            <div className="text-2xl">Education</div>
            <div className="flex flex-col text-sm text-gray-400">
                <div>
                    {data.combinedCivilianTranscriptCredits} total credits
                </div>
                {/* <div>{data.combinedNoteForSixtyCreditPostings}</div> */}
            </div>

            <div className="mt-3">
                {data.institutions.map((item, i) => {
                    return (
                        <div key={i} className="mb-4">
                            <div className="">{item.institutionName}</div>
                            <div className="">{item.programName}</div>
                            {item.contact.phone && (
                                <div className="">{item.contact.phone}</div>
                            )}
                            {item.contact.website && (
                                <div className="">{item.contact.website}</div>
                            )}
                            <div className="">
                                {item.contact.address.city},
                                {item.contact.address.state}
                            </div>
                            <div className="">
                                {item.startDate.toLocaleDateString()} -{' '}
                                {item.endDate.toLocaleDateString()}
                            </div>
                            <div className="">
                                {item.additionalNotes.map((note, n) => {
                                    return (
                                        <div key={n} className="">
                                            {note}
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
