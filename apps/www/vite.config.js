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

    // server: {
    //     headers: {
    //         'Access-Control-Allow-Origin': '*',
    //     },
    //     configureServer(server) {
    //         server.middlewares.use((req, res, next) => {
    //             if (req.url?.endsWith('.glb')) {
    //                 res.setHeader('Content-Type', 'model/gltf-binary');
    //             }

    //             next();
    //         });
    //     },
    // },
    // assetsInclude: ['**/*.glb', '**/*.png', '**/*.hri'],
    // fs: {
    //     allow: [
    //         // Allow Vite to serve files from your project root
    //         '.',
    //         // Explicitly allow it to read from your local component library path
    //         // path.resolve(__dirname, '../../public'),
    //     ],
    // },
});
