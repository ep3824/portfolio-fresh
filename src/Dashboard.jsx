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

  const [realtimeDataState, setRealtimeDataState] = React.useState(null);
  const [forecastDataState, setForecastDataState] = React.useState(null);
  const [GitHubDataState, setGitHubDataState] = React.useState(null);

  useEffect(() => {
    const fetchRealtimeData = async () => {
      try {
        const response = await fetch('/api/realtime');
            if (response.ok) {
          const realtimeData = await response.json();
          setRealtimeDataState(realtimeData);
        } else {
          console.error(`Failed to fetch weather data. Status: ${response.status}`);
        }
      } catch (error) {
        console.error('Error fetching realtime weather data:', error);
      }
    };

    const fetchForecastData = async () => {
      try {
        const response = await fetch('/api/forecast');
            if (response.ok) {
          const forecastData = await response.json();
          setForecastDataState(forecastData);
        } else {
          console.error(`Failed to fetch weather data. Status: ${response.status}`);
        }
      } catch (error) {
        console.error('Error fetching Forecast data:', error);
      }
    };

    const fetchGitHubData = async () => {
      try {
        const response = await fetch('/api/gitCommits');
            if (response.ok) {
          const GitHubData = await response.json();
          setGitHubDataState(GitHubData);
        } else {
          console.error(`Failed to fetch weather data. Status: ${response.status}`);
        }
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      }
    };

    fetchRealtimeData();
    fetchForecastData();
    fetchGitHubData();
  }, []); // The empty dependency => effect runs once when the component mounts

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs>
          <Item><GitHub GitHubData={GitHubDataState}/></Item>
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