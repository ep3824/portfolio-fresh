import ReactDOM from "react-dom/client";
import App from "../App.jsx";
import "../index.css";
import "@fontsource-variable/red-hat-text";
import { ThemeProvider } from "@emotion/react";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Create a dark theme
let darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#031719",
      paper: "#031719",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
          padding: "10px",
          minWidth: "120px",
        },
      },
    },
  },
  typography: {
    fontFamily: `"Red Hat Text Variable", sans-serif`,
  },
});

darkTheme = responsiveFontSizes(darkTheme);

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

// Define placesCallback in the global scope
window.placesCallback = function () {
  // This function will be called once the Google Maps API is loaded

  // Now, you can initialize your React app or perform any other logic related to the API
  console.log("Google Maps API loaded successfully");
};

root.render(
  <ThemeProvider theme={darkTheme}>
    <App />
  </ThemeProvider>
);
