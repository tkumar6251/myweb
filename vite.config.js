import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// We reuse existing images from the workspace by pointing Vite's publicDir
// to the shared images folder one level up.
export default defineConfig({
  plugins: [react()],
  publicDir: path.resolve(__dirname, '../images'),
  server: {
    port: 5173,
    host: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
});


