// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const root = path.resolve(__dirname, 'src');
const pagesDir = path.resolve(root, 'pages');

export default defineConfig({
  plugins: [react()],
  root,
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(root, 'index.html'),
        home: path.resolve(root, 'home', 'index.html'),
        // about: path.resolve(pagesDir, 'about', 'index.html'),
        // contact: path.resolve(pagesDir, 'contact', 'index.html'),
      },
    },
    outDir: path.resolve(__dirname, 'dist'),
  },
});
