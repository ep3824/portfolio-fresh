import React, { useEffect } from 'react';
import { Grid, ThemeProvider, Box } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import { LineChart } from '@mui/x-charts/LineChart';


export default function Weather({ data, data2 }) {
  console.log('Data:', data);
  console.log('Data2:', data2);

  const temperatureF = data ? (data.data.values.temperature * 9 / 5) + 32 : null;
  const temperatureC = data ? data.data.values.temperature : null;
  const cloudCover = data ? data.data.values.cloudCover : null;
  const weatherImg = cloudCover ? (cloudCover > 50 ? <CloudIcon /> : <WbSunnyIcon />) : null;

  const tempData = {}
  data2 ? data2.timelines.daily.map((day) => tempData[day].time = day.temperatureAvg) : null;

  const cloudCoverData = {};
  data2 ? data2.timelines.daily.map((day) => cloudCoverData[day].time = day.cloudCoverAvg) : null;

  return (
    <Box>
    {data ? (
      <Grid>
        <p>The weather in Frisco, TX is: {temperatureF} °F or {temperatureC} °C.</p>
        <p>Cloud cover is at {cloudCover} %</p>
          <LineChart
            xAxis={[
              {
                type: 'time',
                data: daysOfWeek,
                scaleType: 'point',
                orientation: 'bottom',
              }
            ]}
            yAxis={[
              {
                type: 'linear',
                orientation: 'left',
                id: 'temperature',
                dataKey: 'temperature',
                name: 'Temperature (°C)',
                unit: '°C',
              },
              {
                type: 'linear',
                orientation: 'right',
                id: 'cloudCover',
                dataKey: 'cloudCover',
                name: 'Cloud Cover (%)',
                unit: '%',
              },
            ]}
            series={[
              {
                type: 'line',
                data: temperatureData,
                dataKey: 'temperature',
                yAxisId: 'temperature',
                name: 'Temperature',
                fill: '#8884d8',
                stroke: '#8884d8',
              },
              {
                type: 'line',
                data: cloudCoverData,
                dataKey: 'cloudCover',
                yAxisId: 'cloudCover',
                name: 'Cloud Cover',
                fill: '#82ca9d',
                stroke: '#82ca9d',
              },
            ]}
            width={500}
            height={300}
          />
      </Grid>
    ) : (
      <p>Loading weather data...</p>
    )}
    {data ? (
      <p>{weatherImg}</p>
    ) : (
      <p>Loading weather data...</p>
    )}
  </Box>
  );
};
