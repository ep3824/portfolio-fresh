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


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// const useNoPaddingStyles = makeStyles((theme) => ({
//   root: {
//     padding: '0rem',
//   },
// }));

// Create a dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    // You can customize other theme options here
  },
});


function App() {
  const [count, setCount] = useState(1)

  // const classes = useNoPaddingStyles();

  return (
    <ThemeProvider theme={darkTheme} >


      <div className="App">
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid xs={12} md={8}>
            <Item><h1>TBD Portfolio Website</h1></Item>
          </Grid>
          <Grid xs={8} md={8} flexGrow={.9}>
            <Item>
              <Dashboard ></Dashboard>
            </Item>
            <Item>
              <Projects />
            </Item>
            <Item>
              <Resume />
            </Item>
          </Grid>
        </Grid>

        <div className="card">
          <Button variant="contained" onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
          <Navbar>
          </Navbar>
        </div>
      </div>

    </ThemeProvider>
  );
}

export default App
