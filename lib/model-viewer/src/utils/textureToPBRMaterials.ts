import { ITexture, IPBRTexture } from '@/interface';
import { AppCache } from '@/lib';
import { Material, MeshPhysicalMaterial, Texture, Vector2 } from 'three';
import { loadTexture } from './loadTexture';

const cached = new AppCache<number, Material>();

export type PBRTexture = {
    diffuse: Texture | null;
    ao: Texture | null;
    displace: Texture | null;
    metal: Texture | null;
    rough: Texture | null;
    normal: Texture | null;
    coat: Texture | null;
    coatRough: Texture | null;
    coatNormal: Texture | null;
    specular: Texture | null;
};

export const textureToPBRMaterials = async (
    environment: Texture | null,
    texture?: ITexture | null,
): Promise<Material | null> => {
    if (texture) {
        let material: Material;
        const cache = cached.get(texture.id);

        if (cache) {
            return cache;
        } else {
            const pbrs = await loadPBRs(texture.pbr);

            console.log('TEXTURE', texture.type);

            material = new MeshPhysicalMaterial({
                aoMap: pbrs.ao,
                aoMapIntensity: 1.0,
                envMap: environment,
                envMapIntensity: 1,
                map: pbrs.diffuse,
                normalMap: pbrs.normal,
                roughnessMap: pbrs.rough,
                metalnessMap: pbrs.metal,
                // displacementMap: pbrs.displace, // causing issues with the
                normalScale: new Vector2(0.5, 0.5),
                metalness: 0,
                roughness: texture.type === 'metal' ? 0 : 0.5,
                clearcoatMap: pbrs.coat,
                clearcoatNormalMap: pbrs.coatNormal,
                clearcoatRoughnessMap: pbrs.coatRough,
                transparent: true,
            });

            cached.set(texture.id, material);

            return material;
        }
    }

    return null;
};

const loadPBRs = async (pbr: IPBRTexture | null): Promise<PBRTexture> => {
    if (pbr) {
        const [
            ao,
            diffuse,
            normal,
            rough,
            displace,
            metal,
            coat,
            coatNormal,
            coatRough,
        ] = await Promise.all([
            loadTexture(pbr.ao),
            loadTexture(pbr.diffuse),
            loadTexture(pbr.normal),
            loadTexture(pbr.rough),
            loadTexture(pbr.displace),
            loadTexture(pbr.metal),
            loadTexture(pbr.coat),
            loadTexture(pbr.coatNormal),
            loadTexture(pbr.coatRough),
        ]);

        return {
            diffuse: diffuse,
            ao: ao,
            displace: displace,
            metal: metal,
            rough: rough,
            normal: normal,
            coat: coat,
            coatRough: coatRough,
            coatNormal: coatNormal,
            specular: null,
        };
    } else {
        return {
            diffuse: null,
            ao: null,
            displace: null,
            metal: null,
            rough: null,
            normal: null,
            coat: null,
            coatRough: null,
            coatNormal: null,
            specular: null,
        };
    }
};
