import { defineConfig } from 'tsup';
import { sassPlugin } from 'esbuild-sass-plugin'; // <-- Import the plugin

export default defineConfig({
    entry: ['src/index.ts'],
    publicDir: true,
    format: ['cjs', 'esm'], // Emits both formats
    clean: true, // Cleans dist before building
    esbuildPlugins: [sassPlugin({ type: 'style' })],
    splitting: false,
    sourcemap: true,
    injectStyle: true,
    loader: {
        '.hdr': 'dataurl', // Copies the file to 'dist' and updates the import to point to it
    },
    outExtension({ format }) {
        return {
            js: format === 'esm' ? '.mjs' : '.js', // esm -> .mjs, cjs -> .js
        };
    },
    onSuccess: 'mkdir -p dist/assets && cp -r src/assets/* dist/assets',
    dts: true,
    experimentalDts: false,
    // Explicitly tell tsup's general bundle configuration to treat scss as external
    // so the bundlers don't try to look for TypeScript structures inside your styles.
    external: ['react', /^\/.*/],
});
