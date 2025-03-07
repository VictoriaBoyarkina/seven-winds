import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@colors': path.resolve(__dirname, './src/_colors.module.scss'),
      '@ui': path.resolve(__dirname, './src/ui'),
    },
  },
});
