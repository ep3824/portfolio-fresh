import { defineConfig } from "vite";
import { resolve } from "path";
// import viteCSPPlugin from './vite-csp-plugin';
import react from "@vitejs/plugin-react-swc";
import dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: `${process.env.VITE_API_HOST}:8443`,
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: './dist',
    rollupOptions: {
      input: {
        main: resolve('/', "index.html"),
      },
    },
  },
});
