import clsx from 'clsx';
import React, { FC } from 'react';
import './style.scss';

type BgImageCompProps = {
    src?: string | null;
    className?: string;
    bgCss?: string;
    size?: 'contain' | 'cover';
    title?: string;
    children?: React.ReactNode;
    height?: number | string;
    minHeight?: number | string;
    maxHeight?: number | string;
    width?: number | string;
    minWidth?: number | string;
    maxWidth?: number | string;
    position?: string;
    backgroundColor?: string;
    opacity?: number;
    onClick?: (evt: React.MouseEvent) => void;
};

export const BgImageComp: FC<BgImageCompProps> = ({
    src,
    className,
    size = 'cover',
    title,
    children,
    height,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    bgCss,
    position,
    width,
    onClick,
    backgroundColor,
}) => {
    return (
        <div
            className={clsx(
                `bg-[url('${src}')] bg-cover bg-center bg-no-repeat`,
                className,
            )}
            style={{
                height: height || '100%',
                width: width || '100%',
                minWidth: minWidth,
                maxWidth: maxWidth,
                maxHeight: maxHeight,
                minHeight: minHeight,
                // backgroundImage:
                //     src ||
                //     'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.0))',
                // backgroundColor: backgroundColor || 'transparent',
            }}
            title={title}
            onClick={onClick}
        >
            {/* <div
                className={clsx('background', bgCss)}
                style={{
                    backgroundImage: `url(${src})`,
                    backgroundSize: size,
                    backgroundPosition: position || 'center',
                    height: height,
                    width: width,
                }}
            >
                {children}
            </div> */}
        </div>
    );
};
