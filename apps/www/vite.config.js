import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        viteStaticCopy({
            targets: [
                {
                    // Path to your library's public folder
                    src: new URL(
                        '../../lib/model-viewer/public/**/*',
                        import.meta.url,
                    ).pathname,
                    onlyTransformIfNeeded: true,
                    // Where it should land in the server root / output dist
                    dest: 'public',
                },
            ],
            watch: {
                reloadOnEmpty: false,
            },
        }),
    ],
});
