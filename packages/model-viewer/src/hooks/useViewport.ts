import { ViewportContext } from '@/context';
import { useContext } from 'react';

export const useViewport = () => {
    const context = useContext(ViewportContext);

    return context;
};
