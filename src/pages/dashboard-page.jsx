// import ReactDOM from 'react-dom/client';
// import DashboardPage from '../DashboardPage';
// import "@fontsource/roboto/300.css";
// import "@fontsource/roboto/400.css";
// import "@fontsource/roboto/500.css";
// import "@fontsource/roboto/700.css";
// ReactDOM.createRoot(document.getElementById('root')).render(<DashboardPage />);

// dashboard-page.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import DashboardPage from '../DashboardPage';

// Emotion cache bits
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

// (Optional) if you’re theming with MUI here too
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';

// grab the nonce you injected into <html data-nonce="…">
const nonce = document.documentElement.dataset.nonce;

// create a single Emotion cache that stamps every <style> with nonce="…"
const emotionCache = createCache({
  key: 'css',   // using 'css' ensures both global and component styles use this cache
  nonce,
});

// (Optional) build your theme if you need it in the dashboard
let theme = createTheme({ /* your overrides… */ });
theme = responsiveFontSizes(theme);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <CacheProvider value={emotionCache}>
    {/* wrap in ThemeProvider only if you’re using MUI theming here */}
    <ThemeProvider theme={theme}>
      <DashboardPage />
    </ThemeProvider>
  </CacheProvider>
);
