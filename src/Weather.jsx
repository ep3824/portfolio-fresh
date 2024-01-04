import React, { useEffect } from 'react';
import { Grid, ThemeProvider, Box } from '@mui/material';
import { apiKey } from '../.apiKey';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import { BarChart } from '@mui/x-charts/BarChart';


export default function Weather({ data }) {

    const temperatureF = data ? (data.data.values.temperature * 9/5) + 32 : null;
    const temperatureC = data ? data.data.values.temperature : null;
    const cloudCover = data ? data.data.values.cloudCover : null;
    const weatherImg = cloudCover ? (cloudCover > 50 ? <CloudIcon /> : <WbSunnyIcon />) : null;
      
  return (
    <Box>
    {data ? (
      <Grid>
        <p>The weather in Frisco, TX is: {temperatureF} °F or {temperatureC} °C.</p>
        <p>Cloud cover is at {cloudCover} %</p>
          <BarChart
            xAxis={[
              {
                id: 'barCategories',
                data: ['Mon', 'Tues', 'Wed'],
                scaleType: 'band',
              },
            ]}
            series={[
              {
                data: [70, 66, 62],
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
