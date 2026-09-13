import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
    plugins: [react(), tailwindcss()],
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
