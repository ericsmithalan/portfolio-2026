interface IIdea {
    id: number;
    name: string;
    description: string;
    image: string;
    blurbs: Array<IBlurb>;
}

interface IBlurb {}

export const IDEAS = [
    {
        id: 1,
        name: 'cornerer',
        description: `A reusablecorner guards that 
            stay flat on boards of different thicknesses, 
            clamp with straps, and stores away without 
            needing much space.`,
        image: '',
    },
];
