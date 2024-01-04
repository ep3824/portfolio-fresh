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
      '/api/history/recent': {
        target: 'https://api.tomorrow.io/v4/weather/history/recent',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/history\/recent/, ''),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    },
  },
});
