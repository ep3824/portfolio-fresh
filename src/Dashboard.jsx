import React from 'react';
import { Grid, ThemeProvider, Box, Paper } from '@mui/material';
import Weather from './Weather';
import { styled } from '@mui/material/styles';
import TrafficCount from './TrafficCount';
import Music from './Music';
import { useEffect } from 'react';
const apiKey = import.meta.env.VITE_API_KEY;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



/**
 * Renders the Dashboard component.
 * Fetches weather data from the Tomorrow.io API and displays it along with other components.
 *
 * @returns {JSX.Element} The rendered Dashboard component.
 */

export default function Dashboard() {

    const [data, setData] = React.useState(null);
    const [data2, setData2] = React.useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('/api/realtime?location=frisco&apikey=' + apiKey);
            if (response.ok) {
              const result = await response.json();
              setData(result);
            } else {
              console.error(`Failed to fetch weather data. Status: ${response.status}`);
            }
          } catch (error) {
            console.error('Error fetching weather data:', error);
          }
        };

        const fetchData2 = async () => {
          try {
            const response = await fetch('/api/forecast?location=frisco&timesteps=1d&apikey=' + apiKey);
            if (response.ok) {
              const result = await response.json();
              setData2(result);
            } else {
              console.error(`Failed to fetch weather data. Status: ${response.status}`);
            }
          } catch (error) {
            console.error('Error fetching weather data:', error);
          }
        };
    
        fetchData();
        fetchData2();
      }, []); // The empty dependency array ensures that the effect runs once when the component mounts

    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs>
            <Item><Music /></Item>
          </Grid>
          <Grid item xs={6}>
            <Item><Weather data={data} data2={data2}/></Item>
          </Grid>
          <Grid item xs>
            <Item><TrafficCount /></Item>
          </Grid>
        </Grid>
      </Box>
            
    );
}