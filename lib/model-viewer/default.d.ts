declare module '*.hdr' {
    const src: string;
    export default src;
}

declare module '*.png' {
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
