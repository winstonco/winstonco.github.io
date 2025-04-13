import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
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
        // add new pages like this: (i think)
        // `name`: resolve(root, `path`, `file`)
      },
    },
  },
});
