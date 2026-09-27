import { FC } from 'react';

import { Viewer, ViewerProps } from './Viewer';
import { ViewportProvider } from './context';

export const Viewport3D: FC<ViewerProps> = (props) => {
    return (
        <ViewportProvider>
            <Viewer {...props} />
        </ViewportProvider>
    );
};
