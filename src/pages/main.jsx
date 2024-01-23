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
      default: "#042326", 
      paper: "#042326",
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

root.render(
  <ThemeProvider theme={darkTheme}>
    <App />
  </ThemeProvider>
);
