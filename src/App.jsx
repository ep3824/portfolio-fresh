import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from "./DashboardPage";
import Navbar from "./Navbar.jsx";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Skills from "./Skills.jsx";
import Typography from "@mui/material/Typography";
import Contact from "./Contact.jsx";
import About from "./About.jsx";
import ProjectsSection from "./ProjectsSection.jsx";
import axios from "axios";

// This probably needs to be deleted, I don't think I want the elevation that comes with Paper
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#031719" : "#fff",
  ...theme.typography.body2,
  // Made this change to get one uniform background color
  backgroundImage: "none",
  padding: 0,
  boxShadow: "none",
}));

const getCSRFToken = async () => {
  const response = await axios.get('/getCSRFToken');
  axios.defaults.headers.post['X-CSRF-Token'] = response.data.CSRFToken;
};

function App() {
  useEffect(() => {
    getCSRFToken();
  }
  , []);
  return (
    <Router>
      <Routes>
        <Route
          path="/dashboard-page"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <DashboardPage />
            </Suspense>
          }
        />
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <React.Fragment>
                <div className="App">
                  <div className="card">
                    <Navbar></Navbar>
                  </div>
                  <Grid
                    container
                    sx={{ maxWidth: 1400, margin: "0 auto" }}
                    padding={1}
                  >
                    <Grid>
                      
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
              </React.Fragment>
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
