import React from 'react';
import { Grid, ThemeProvider, Box, Paper } from '@mui/material';
import Weather from './Weather';
import { styled } from '@mui/material/styles';
import TrafficCount from './TrafficCount';
import Music from './Music';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Dashboard() {

    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs>
            <Item><Music /></Item>
          </Grid>
          <Grid item xs={6}>
            <Item><Weather /></Item>
          </Grid>
          <Grid item xs>
            <Item><TrafficCount /></Item>
          </Grid>
        </Grid>
      </Box>
            
    );
}