import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'path';

export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        viteStaticCopy({
            targets: [
                {
                    // Path to your library's public folder
                    src: new URL(
                        '../../lib/model-viewer/dist/**/*',
                        import.meta.url,
                    ).pathname,
                    onlyTransformIfNeeded: true,
                    // Where it should land in the server root / output dist
                    dest: 'dist',
                },
            ],
            watch: {
                reloadOnEmpty: false,
            },
        }),
    ],
    assetsInclude: ['**/*.glb', '**/*.gltf'],

    fs: {
        allow: [
            // Allow Vite to serve files from your project root
            '.',
            // Explicitly allow it to read from your local component library path
            path.resolve(__dirname, '../../lib/model-viewer'),
        ],
    },
});
