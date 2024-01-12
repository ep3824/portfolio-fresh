import "./App.css";
import Navbar from "./Navbar.jsx";

import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import Skills from "./Skills.jsx";
// import { makeStyles } from '@mui/system';

import Typography from "@mui/material/Typography";
import Contact from "./Contact.jsx";
import About from "./About.jsx";
import ProjectsSection from "./ProjectsSection.jsx";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#0f1724" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
  //Made this change to get one uniform background color
  backgroundImage: "none",
}));

function App() {
  return (
    <div className="App" >
      <div className="card">
        <Navbar></Navbar>
      </div>
      <Grid
        container
        sx={{ maxWidth: 700, margin: "0 auto" }}
      >
        <Grid item xs={12}>
          <Typography
            variant="h1"
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
            hello, I&apos;m ethan,
          </Typography>
          <Item>
            <About />
          </Item>
          <Item>
            <ProjectsSection />
          </Item>
          <Item>
            <Skills />
          </Item>
          <Item>
            <Contact />
          </Item>
        </Grid>
      </Grid>
      
    </div>
  );
}

export default App;
