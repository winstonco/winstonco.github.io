import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import { resolve } from 'path';

const root = resolve(__dirname, 'src/pages');

export default defineConfig({
  plugins: [solid()],
  publicDir: resolve(__dirname, 'public'),
  root: root,
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        'pie-splitter': resolve(root, 'pie-splitter', 'index.html'),
      },
    },
  },
})
