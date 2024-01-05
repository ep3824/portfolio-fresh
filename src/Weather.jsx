import React, { useEffect } from 'react';
import { Grid, createTheme, ThemeProvider, Box, Typography } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import { LineChart } from '@mui/x-charts/LineChart';
import Paper from '@mui/material/Paper';
import { ChartsReferenceLine } from '@mui/x-charts/ChartsReferenceLine';


export default function Weather({ realtimeData, forecastData }) {

  function formatDateWithoutYear(inputDate) {
    return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(new Date(inputDate));
  }

  const temperatureF = realtimeData ? (Math.round(realtimeData.data.values.temperature * 9 / 5) + 32) : null;
  const temperatureC = realtimeData ? Math.round(realtimeData.data.values.temperature) : null;
  const cloudCover = realtimeData ? realtimeData.data.values.cloudCover : null;
  const weatherImg = cloudCover ? (cloudCover > 50 ? <CloudIcon /> : <WbSunnyIcon />) : null;

  const tempData = [];
  const days = [];
  forecastData ? forecastData.timelines.daily.map((day) => tempData.push(day.values.temperatureMax)) : [];
  forecastData ? forecastData.timelines.daily.map((day) => days.push(formatDateWithoutYear(day.time))) : [];

  //Convert temp data to F
  tempData.map((temp, index) => tempData[index] = Math.round((temp * 9 / 5) + 32));


  const cloudCoverData = [];
  forecastData ? forecastData.timelines.daily.map((day) => cloudCoverData.push(day.values.cloudCoverAvg)) : [];

  // Create a dark theme
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      // You can customize other theme options here
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box >
        {realtimeData ? (
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
              {realtimeData && forecastData && forecastData.timelines.daily.length > 0 ? (
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
                      data: tempData,

                      yAxisId: 'temperature',
                      name: 'Temperature',
                      color: '#fff',
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


          </Grid>
        ) : (
          <p>Loading weather data...</p>
        )}

      </Box>
    </ThemeProvider>
  );

};
