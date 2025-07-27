import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      src: resolve('./src'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/cedar.ts'), // Your library's entry point
      name: 'Cedar', // Global variable name for IIFE bundle
      fileName: (format) => `cedar.${format}.js`,
    },
    // minify: 'esbuild',
  },
});
