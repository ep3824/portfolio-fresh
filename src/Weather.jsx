import React, { useEffect } from 'react';
import { Grid, ThemeProvider, Box } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import { LineChart } from '@mui/x-charts/LineChart';


export default function Weather({ realtimeData, forecastData }) {

  function formatDateWithoutYear(inputDate) {
    return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(new Date(inputDate));
  }

  console.log('realtimeData', realtimeData);
  console.log('forecastData', forecastData);

  const temperatureF = realtimeData ? (realtimeData.data.values.temperature * 9 / 5) + 32 : null;
  const temperatureC = realtimeData ? realtimeData.data.values.temperature : null;
  const cloudCover = realtimeData ? realtimeData.data.values.cloudCover : null;
  const weatherImg = cloudCover ? (cloudCover > 50 ? <CloudIcon /> : <WbSunnyIcon />) : null;

  const tempData = [];
  const days = [];
  forecastData ? forecastData.timelines.daily.map((day) => tempData.push(day.values.temperatureMax)) : [];
  forecastData ? forecastData.timelines.daily.map((day) => days.push(formatDateWithoutYear(day.time))) : [];

  const cloudCoverData = [];
  forecastData ? forecastData.timelines.daily.map((day) => cloudCoverData.push(day.values.cloudCoverAvg)) : [];

  console.log("tempData is:", tempData);
  console.log("days is:", days);
  console.log("cloudCoverData is:", cloudCoverData);
  return (
    <Box>
      {realtimeData ? (
        <Grid>
          <p>The weather in Frisco, TX is: {temperatureF} °F or {temperatureC} °C.</p>
          <p>Cloud cover is at {cloudCover} %</p>
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
                  
                  name: 'Temperature (°C)',
                  unit: '°C',
                },
                {
                  type: 'linear',
                  orientation: 'right',
                  id: 'cloudCover',
                  
                  name: 'Cloud Cover (%)',
                  unit: '%',
                },
              ]}
              series={[
                {
                  type: 'line',
                  data: tempData,
                  
                  yAxisId: 'temperature',
                  name: 'Temperature',
                  fill: '#8884d8',
                  stroke: '#8884d8',
                },
                {
                  type: 'line',
                  data: cloudCoverData,
                  
                  yAxisId: 'cloudCover',
                  name: 'Cloud Cover',
                  fill: '#82ca9d',
                  stroke: '#82ca9d',
                },
              ]}
              width={500}
              height={300}
            />
          ) : (
            <p>No forecast data available.</p>
          )}

        </Grid>
      ) : (
        <p>Loading weather data...</p>
      )}
      {realtimeData ? (
        <p>{weatherImg}</p>
      ) : (
        <p>Loading weather data...</p>
      )}
    </Box>
  );
};
