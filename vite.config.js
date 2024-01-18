import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/realtime': {
        target: '10.0.2.156:3000/api/realtime',
        changeOrigin: true,
      },
      '/api/forecast': {
        target: '10.0.2.156:3000/test/api/forecast',
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
