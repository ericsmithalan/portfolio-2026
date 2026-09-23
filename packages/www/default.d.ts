declare module '*.hdr' {
    const value: string;
    export default value;
}
declare module '*.png' {
    const value: string;
    export default value;
}

declare module '*.glb' {
    const value: string;
    export default value;
}

declare module '*.css' {
    const content: { [className: string]: string };
    export default content;
}

declare module '*.scss' {
    const content: { [className: string]: string };
    export default content;
}
