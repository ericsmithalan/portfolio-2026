import { FC } from 'react';
import { HeroComp } from '../hero';

type IdeaCompProps = {
    children?: React.ReactNode;
    title: string;
    description: string;
    image: string;
};

export const IdeaComp: FC<IdeaCompProps> = ({
    children,
    image,
    title,
    description,
}) => {
    return (
        <div className="mx-auto flex flex-col items-center">
            <img
                src={image}
                className={`h-90 w-full object-contain bg-contain 
                    bg-center bg-no-repeat aspect-video 
                    bg-linear-to-b from-gray-300 to-white`}
            />

            <div className="mx-40">
                <h2 className="text-2xl">{title}</h2>
                <p className="p-0">{description}</p>
            </div>
        </div>
    );
};
