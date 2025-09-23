import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        manualChunks: {
          phaser: ['phaser'],
          react: ['react', 'react-dom'],
        },
      },
    },
  },
  plugins: [
    createHtmlPlugin(),
    tailwindcss(),
    react(),
    {
      name: 'phaser-force-reload',
      handleHotUpdate({ file, server }) {
        if (file.includes('/game/')) {
          server.ws.send({
            type: 'full-reload',
          });
          return [];
        }
      },
    },
  ],
});
