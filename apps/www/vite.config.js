import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'path';

export default defineConfig({
    publicDir: './public',
    plugins: [
        react(),
        tailwindcss(),
        // viteStaticCopy({
        //     targets: [
        //         {
        //             // Path to your library's public folder
        //             src: URL('./public', import.meta.url),
        //             onlyTransformIfNeeded: true,
        //             // Where it should land in the server root / output dist
        //             dest: 'public',
        //         },
        //     ],
        //     watch: {
        //         reloadOnEmpty: false,
        //     },
        // }),
    ],
    assetsInclude: ['**/*.glb', '**/*.png', '**/*.hri'],
    // fs: {
    //     allow: [
    //         // Allow Vite to serve files from your project root
    //         '.',
    //         // Explicitly allow it to read from your local component library path
    //         // path.resolve(__dirname, '../../public'),
    //     ],
    // },
});
