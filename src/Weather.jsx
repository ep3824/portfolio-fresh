import React, { useEffect } from 'react';
import { Grid, ThemeProvider, Box } from '@mui/material';
import { apiKey } from '../.apiKey';

export default function Weather({ data }) {

    const temperatureF = data ? (data.data.values.temperature * 9/5) + 32 : null;
      
  return (
    <Box>
    {data ? (
      <p>The weather in Frisco, TX is: {temperatureF}</p>
    ) : (
      <p>Loading weather data...</p>
    )}
    {/* Add any additional UI elements or logic based on the presence of data */}
  </Box>
  );
};
