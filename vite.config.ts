import { defineConfig } from 'vite';
import copy from 'rollup-plugin-copy';

export default defineConfig({
  root: '.',
  base: 'https://isabelparedes.github.io/pydata2025/',
  server: {
    open: true,
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      plugins: [
        copy({
          targets: [{ src: 'slides.md', dest: 'dist' }],
          hook: 'writeBundle',
        }),
      ],
    },
  },
});
