import { FC } from 'react';
import './index.scss';

type BlurbCompProps = {
    children?: React.ReactNode;
    title: string;
};

export const BlurbComp: FC<BlurbCompProps> = ({ children, title }) => {
    return (
        <div className="blurb-comp">
            <div>{title}</div>
            <div>{children}</div>
        </div>
    );
};
