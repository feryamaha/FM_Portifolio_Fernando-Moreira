import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteSass from 'vite-plugin-sass-dts';

export default defineConfig({
  base: '/FM_Portifolio_Fernando-Moreira/',
  plugins: [react(), viteSass()],
});

