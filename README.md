# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## ethanparent.com

Here are some features of this website:

1. Caches API responses and stores them in memory for 1 day (at time of testing, improved site load speed from ~500ms on first load to ~350ms on subsequent loads...35% faster)
2. Proxies the fetch requests from the vite server to the backend server to obscure API keys and other sensitive information
