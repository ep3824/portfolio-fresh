import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/realtime': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/api/forecast': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/api/gitCommits': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/api/listPokemon': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
    logLevel: 'debug',
  },
});
