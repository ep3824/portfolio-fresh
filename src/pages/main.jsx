// index.jsx
import React from "react";
import ReactDOM from "react-dom/client";

// Emotion bits
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

// MUI bits
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material/styles";

import App from "../App.jsx";
import "../index.css";
import "@fontsource-variable/red-hat-text";

// 1) Grab the nonce from your <html data-nonce="…">
const nonce = document.documentElement.dataset.nonce;

// 2) Create an Emotion cache tied to that nonce
const emotionCache = createCache({
  key: "css",     // you can pick any prefix, 'mui' is conventional for MUI
  nonce,          // this is what makes `<style nonce="…">` happen
});

// 3) Build your theme
let darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: { default: "#031719", paper: "#031719" },
  },
  components: {
    MuiButton: { styleOverrides: { root: { borderRadius: "20px", padding: "10px", minWidth: "120px" } } },
  },
  typography: { fontFamily: `"Red Hat Text Variable", sans-serif` },
});
darkTheme = responsiveFontSizes(darkTheme);

// 4) Render, wrapping first in CacheProvider, then in ThemeProvider
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <CacheProvider value={emotionCache}>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </CacheProvider>
);
