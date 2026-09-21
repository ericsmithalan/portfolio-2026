import { FC } from 'react';
import './index.scss';
import { BgImageComp } from '../bg-image';

type HeroCompProps = {
    children?: React.ReactNode;
    image?: string;
    bgColor?: string;
};

export const HeroComp: FC<HeroCompProps> = ({ children, image }) => {
    return (
        <BgImageComp
            backgroundColor="#222"
            position="center top"
            size="contain"
            height={400}
            src={image}
        ></BgImageComp>
    );
};
