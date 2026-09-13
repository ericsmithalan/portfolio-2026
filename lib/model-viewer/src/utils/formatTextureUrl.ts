import { TextureResolution } from '@/interface';

export const formatTextureUrl = (
    url: string,
    resolution: TextureResolution,
) => {
    return `${url}-${resolution}.png`;
};
