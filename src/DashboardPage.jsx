import { Grid, Box, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import "@fontsource-variable/red-hat-text";
import Navbar from "./Navbar";

import Dashboard from "./Dashboard";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
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
    // !!!! Need to check on the below, not sure if I'm still doing that after edits
    // Here we lift up state from child (ChatGPT) to projects, back down to child (PokeDex)
    <ThemeProvider theme={darkTheme}>
      <div id="Projects">
        <div className="card">
          <Navbar></Navbar>
        </div>
        <Item>
          <Grid container sx={{ maxWidth: 700, margin: "0 auto" }} padding={3}>
            <Grid item xs={12}>
              <Typography
                variant="h2"
                padding={4}
                sx={{
                  backgroundcolor: "primary",
                  backgroundImage: `linear-gradient(45deg, #9a61de, #15a8c4)`,
                  backgroundSize: "100%",
                  backgroundRepeat: "repeat",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                User Dashboard
              </Typography>

              <div id="Dashboard"></div>
              <Dashboard></Dashboard>
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
