import React from 'react';
import { Grid, ThemeProvider, Box, Paper } from '@mui/material';
import Weather from './Weather';
import { styled } from '@mui/material/styles';
import TrafficCount from './TrafficCount';
import Music from './Music';
import GitHub from './GitHub';
import { useEffect } from 'react';
// import realtimeData from '../apiRealtimeData';
// import forecastData from '../apiForecastData';
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

  //This is the version that uses the local files, NOT the API:
  // const [realtimeDataState, setRealtimeDataState] = React.useState(null);
  // const [forecastDataState, setForecastDataState] = React.useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setRealtimeDataState(realtimeData);
  //   }

  //   const fetchData2 = async () => {
  //     setForecastDataState(forecastData);
  //   }

  //   fetchData();
  //   fetchData2();
  // }, []); // The empty dependency array ensures that the effect runs once when the component mounts






  // I have to comment this out in Dev. because of API rate limits
  // For now, I am using a local JSON file to test the Weather component

  // const [data, setData] = React.useState(null);
  // const [data2, setData2] = React.useState(null);

  const [realtimeDataState, setRealtimeDataState] = React.useState(null);
  const [forecastDataState, setForecastDataState] = React.useState(null);



  useEffect(() => {
    const fetchRealtimeData = async () => {
      try {
        // Harcoding this for now,
        // const response = await fetch('http://localhost:3000/api/forecast');
        const response = await fetch('/api/realtime');
            if (response.ok) {
          const realtimeData = await response.json();
          setRealtimeDataState(realtimeData);
        } else {
          console.error(`Failed to fetch weather data. Status: ${response.status}`);
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    const fetchForecastData = async () => {
      try {
        // Harcoding this for now,
        // const response = await fetch('http://localhost:3000/api/forecast');
        const response = await fetch('/api/forecast');
            if (response.ok) {
          const forecastData = await response.json();
          setForecastDataState(forecastData);
        } else {
          console.error(`Failed to fetch weather data. Status: ${response.status}`);
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchRealtimeData();
    fetchForecastData();
  }, []); // The empty dependency array ensures that the effect runs once when the component mounts

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs>
          <Item><GitHub /></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><Weather realtimeData={realtimeDataState} forecastData={forecastDataState} /></Item>
        </Grid>
        <Grid item xs>
          <Item><TrafficCount /></Item>
        </Grid>
      </Grid>
    </Box>

  );
}