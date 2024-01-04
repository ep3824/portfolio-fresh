import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/realtime': {
        target: 'https://api.tomorrow.io/v4/weather/realtime',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/realtime/, ''),
        headers: {
          'Content-Type': 'application/json',
        },
      },
      '/api/forecast': {
        target: 'https://api.tomorrow.io/v4/weather/forecast',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/forecast/, ''),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    },
  },
});
