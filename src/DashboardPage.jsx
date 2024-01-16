import { Grid, Box, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import "@fontsource-variable/red-hat-text";
import Navbar from "./Navbar";
import Weather from "./Weather";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#2c86c1" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

// Create a dark theme
let darkTheme = createTheme({
  palette: {
    mode: "dark",
    // You can customize other theme options here
  },
  typography: {
    fontFamily: `"Red Hat Text Variable", sans-serif`,
  },
});

darkTheme = responsiveFontSizes(darkTheme);

export default function DashboardPage() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div id="Dashboard">
        <div className="card">
          <Navbar></Navbar>
        </div>
        <Item>
          <Grid container sx={{ maxWidth: 1400, margin: "0 auto" }} padding={1}>
            <Grid item xs={12}>
              <div id="Dashboard"></div>
              <Weather></Weather>
            </Grid>
          </Grid>
        </Item>
      </div>
      <a href="/">Back to home</a>
    </ThemeProvider>
  );
}

/// new Template ///

// return (
//   <div className="App" >
//     <div className="card">
//       <Navbar></Navbar>
//     </div>
//     <Grid
//       container
//       sx={{ maxWidth: 700, margin: "0 auto"}}
//       padding={3}
//     >
//       <Grid item xs={12}>
//         <Typography
//           variant="h1"
//           sx={{
//             backgroundcolor: "primary",
//             backgroundImage: `linear-gradient(45deg, #9a61de, #15a8c4)`,
//             backgroundSize: "100%",
//             backgroundRepeat: "repeat",
//             backgroundClip: "text",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//           }}

//         >
//           hello, I&apos;m ethan,
//         </Typography>
//         <Item>
//           <About />
//         </Item>
//         <Item>
//           <ProjectsSection />
//         </Item>
//         <Item>
//           <Skills />
//         </Item>
//         <Item>
//           <Contact />
//         </Item>
//       </Grid>
//     </Grid>

//   </div>
