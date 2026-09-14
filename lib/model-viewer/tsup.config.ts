import { defineConfig } from 'tsup';
import { sassPlugin } from 'esbuild-sass-plugin'; // <-- Import the plugin

export default defineConfig({
    entry: ['src/index.ts'],
    publicDir: 'public',
    format: ['cjs', 'esm'], // Emits both formats
    clean: true, // Cleans dist before building
    esbuildPlugins: [sassPlugin({ type: 'style' })],
    splitting: false,
    sourcemap: true,
    injectStyle: true,

    loader: {
        '.glb': 'copy',
        '.hdr': 'dataurl',
    },
    outExtension({ format }) {
        return {
            js: format === 'esm' ? '.mjs' : '.js', // esm -> .mjs, cjs -> .js
        };
    },
    // onSuccess: 'mkdir -p dist/assets && cp -r src/assets/* dist/assets',
    dts: true,
    experimentalDts: false,
    external: ['react', /^\/.*/, '/*.glb'],
});
