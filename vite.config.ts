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
      entry: resolve(__dirname, 'src/index.ts'), // Your library's entry point
      name: 'Cedar', // Global variable name for IIFE bundle
      fileName: (format) => `index.${format}.js`,
    },
  },
});
