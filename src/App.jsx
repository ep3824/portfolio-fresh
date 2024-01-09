import { useState } from 'react'


import './App.css'
import Navbar from './Navbar.jsx'
import Dashboard from './Dashboard.jsx'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Projects from './Projects.jsx';
import Resume from './Resume.jsx';
// import { makeStyles } from '@mui/system';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Contact from './Contact.jsx';
import About from './About.jsx';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// Create a dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    // You can customize other theme options here
  },
});


function App() {
  const [count, setCount] = useState(1)

  return (






    <ThemeProvider theme={darkTheme} >


      <div className="App">
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid xs={12} md={8} >
            <Item><Typography variant="h1" >ethanparent.com</Typography></Item>
            <Item>
              <About />
            </Item>
            <Item>
              <div id="Dashboard"></div>
              <Dashboard ></Dashboard>
            </Item>
            <Item>
              <Projects />
            </Item>
            <Item>
              <Resume />
            </Item>
            <Item>
              <Contact />

            </Item>
          </Grid>
        </Grid>

        <div className="card">
          <Navbar>
          </Navbar>
        </div>
      </div>

    </ThemeProvider>


  );
}

export default App
