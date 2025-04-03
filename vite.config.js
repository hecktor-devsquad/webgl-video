import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/webgl-video/', // Caminho base para GitHub Pages
  plugins: [react()],
});
