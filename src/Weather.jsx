import React, { useEffect } from 'react';
import { Grid, createTheme, ThemeProvider, Box, Typography } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import { LineChart } from '@mui/x-charts/LineChart';
import Paper from '@mui/material/Paper';
import { ChartsReferenceLine } from '@mui/x-charts/ChartsReferenceLine';
import apiForecastData from '../apiForecastData';
import Button from '@mui/material/Button';


export default function Weather() {


  const [realtimeDataState, setRealtimeDataState] = React.useState(null);
  const [forecastDataState, setForecastDataState] = React.useState(null);

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
          //THIS LINE SHOULD BE DELETED BEFORE PROD
          // This is a workaround for the Tomorrow.io API rate limit
          setForecastDataState(apiForecastData);
          // setForecastDataState(forecastData);
          console.log("forecastData", forecastData)
          console.log("forecastDataState", forecastDataState)
        } else {
          console.error(`Failed to fetch weather data. Status: ${response.status}`);
        }
      } catch (error) {
        console.error('Error fetching Forecast data:', error);
      }
    };



    fetchRealtimeData();
    fetchForecastData();
  }, []); // The empty dependency => effect runs once when the component mounts

  function formatDateWithoutYear(inputDate) {
    return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(new Date(inputDate));
  }

  const temperatureF = realtimeDataState ? (Math.round(realtimeDataState.data.values.temperature * 9 / 5) + 32) : null;
  const temperatureC = realtimeDataState ? Math.round(realtimeDataState.data.values.temperature) : null;
  const cloudCover = realtimeDataState ? realtimeDataState.data.values.cloudCover : null;
  const weatherImg = cloudCover ? (cloudCover > 50 ? <CloudIcon /> : <WbSunnyIcon />) : null;

  const tempData = [];
  const tempsMax = [];
  const tempsMin = [];
  const days = [];

  forecastDataState ? forecastDataState.timelines.daily.map((day) => tempsMax.push(day.values.temperatureMax)) : [];
  forecastDataState ? forecastDataState.timelines.daily.map((day) => tempsMin.push(day.values.temperatureMin)) : [];
  forecastDataState ? forecastDataState.timelines.daily.map((day) => days.push(formatDateWithoutYear(day.time))) : [];

  //Convert temp data to F
  tempsMax.map((temp, index) => tempsMax[index] = Math.round((temp * 9 / 5) + 32));
  tempsMin.map((temp, index) => tempsMin[index] = Math.round((temp * 9 / 5) + 32));


  const cloudCoverData = [];
  forecastDataState ? forecastDataState.timelines.daily.map((day) => cloudCoverData.push(day.values.cloudCoverAvg)) : [];



  return (

    <Box >
      {realtimeDataState ? (
        <Grid >
          <Grid >
            <Typography variant="h5" component="div" gutterBottom>
              Weather
            </Typography>
            <Box>
              <Typography variant="h7" component="div" gutterBottom>
                Frisco, TX is {temperatureF} °F / {temperatureC} °C.
              </Typography>
              {weatherImg}
            </Box>
            <Typography variant="h7" component="div" gutterBottom>
              Cloud cover is at {cloudCover} %.
            </Typography>
          </Grid>

          <Box
            sx={{
              height: 260,
              borderRadius: 5,
              p: 2,
              boxShadow: '0 4px 8px rgba(0, 0, 0, .5)',
              backgroundImage: 'linear-gradient(to right bottom, #2980b9, #3498db)', //blue to blue
            }}
          >
            {realtimeDataState && forecastDataState && forecastDataState.timelines.daily.length > 0 ? (
              <LineChart
                xAxis={[
                  {
                    type: 'time',
                    data: days,
                    scaleType: 'point',
                    orientation: 'bottom',

                  }
                ]}
                yAxis={[
                  {
                    type: 'linear',
                    orientation: 'left',
                    id: 'temperature',
                    name: 'Temperature (°F)',
                    unit: '°C',
                    label: 'Temperature (°F)',

                  }
                ]}
                series={[
                  {
                    curve: 'linear',
                    type: 'line',
                    data: tempsMax,
                    label: 'Max Temp (°F)',

                    yAxisId: 'temperature',
                    name: 'Temperature',
                    color: 'pink',
                    strokeWidth: 3,
                  },
                  {
                    curve: 'linear',
                    type: 'line',
                    data: tempsMin,
                    label: 'Min Temp (°F)',

                    yAxisId: 'temperature',
                    name: 'Temperature',
                    color: 'lightblue',
                    strokeWidth: 3,
                  }
                ]}
                padding={{
                  left: 5,
                  right: 5,
                  top: 20,
                  bottom: 20,
                }}
                sx={{
                  path: {
                    strokeWidth: 4,
                  },

                }}
              >


              </LineChart>
            ) : (
              <p>No forecast data available.</p>
            )}

          </Box>
          <Button variant="outlined">
            Daily
          </Button>
          <Button variant="outlined">
            Hourly
          </Button>


        </Grid>
      ) : (
        <p>Loading weather data...</p>
      )}

    </Box>

  );

};
