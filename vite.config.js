import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react-swc'
import process from 'process';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/api/realtime': {
        target: '10.0.2.156:3000/api/realtime',
        changeOrigin: true,
      },
      '/api/forecast': {
        target: '10.0.2.156:3000/api/forecast',
        changeOrigin: true,
      },
    },
    logLevel: 'debug',
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve('/', 'index.html'),
      },
    },
  },
});
