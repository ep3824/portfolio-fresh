import ReactDOM from "react-dom/client";
import App from "../App.jsx";
import "../index.css";
import "@fontsource-variable/red-hat-text";
import { ThemeProvider } from "@emotion/react";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { lime } from "@mui/material/colors";

// Create a dark theme
let darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0f1724",
    },
  },
  background: {
    default: "#0f1724",
    paper: "#0f1724",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
          padding: "10px",
          minWidth: "150px",
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
    <CssBaseline />
    <App />
  </ThemeProvider>
);
