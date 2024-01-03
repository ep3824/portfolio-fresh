import React from 'react';
import { Grid, ThemeProvider, Box } from '@mui/material';

const CustomBox = () => {
  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: '#007FFF',
            dark: '#0066CC',
          },
        },
      }}
    >
      <Box
        sx={{
          width: 100,
          height: 100,
          borderRadius: 1,
          bgcolor: 'primary.main',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
      />
    </ThemeProvider>
  );
};

export default function Dashboard() {
  return (
    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {[1, 2, 3, 4].map((item) => (
        <Grid item xs={6} key={item}>
          <CustomBox />
        </Grid>
      ))}
    </Grid>
  );
};
