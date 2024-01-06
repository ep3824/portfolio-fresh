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
import { makeStyles as makeStyles } from '@mui/system';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0rem',
  },
}));


function App() {
  const [count, setCount] = useState(1)

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2} columns={1} >
        <Grid xs={8}>
            <Item><h1>TBD Portfolio Website</h1></Item>
        </Grid>
        <Grid xs={8}>
          <Item>
            <Dashboard></Dashboard>
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
        <Button variant ="contained" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <Navbar>
        </Navbar>
      </div>
    </div >
  );
}

export default App
