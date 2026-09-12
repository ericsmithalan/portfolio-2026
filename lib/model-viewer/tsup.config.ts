import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'], // Emits both formats
    dts: true, // Generates .d.ts files for both
    clean: true, // Cleans dist before building
    external: ['react'],
    outExtension({ format }) {
        return {
            js: format === 'esm' ? '.mjs' : '.js', // esm -> .mjs, cjs -> .js
        };
    },
});
