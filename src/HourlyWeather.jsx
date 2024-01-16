import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";

export default function DailyWeatherChart({ forecastDataState }) {
  const hourlyTemps = [];
  const hours = [];

  function formatDateWithoutYear(inputDate) {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
    }).format(new Date(inputDate));
  }

  if (forecastDataState) {
    forecastDataState.timelines.hourly.forEach((hour) => {
      hourlyTemps.push(hour.values.temperature);
      hours.push(formatDateWithoutYear(hour.time));
    });
  }

  //Convert temp data to F
  hourlyTemps.map(
    (temp, index) => (hourlyTemps[index] = Math.round((temp * 9) / 5 + 32))
  );

  DailyWeatherChart.propTypes = {
    forecastDataState: PropTypes.object,
  };

  // const imageFileNames = [
  //   1000, 1001, 1100, 1101, 1102, 2000, 2100, 4000, 4001, 4200, 4201,
  //   5000, 5001, 5100, 5101, 5110, 6000, 6001, 6200, 6201, 7101, 7102, 7000, 8000,
  // ];

  // const images = [];
  // imageFileNames.forEach((fileName) => {
  //   try {
  //     const image = require(`./weatherImages/${fileName}.png`);
  //     images.push(image);
  //   } catch (error) {
  //     console.error(`Error loading image ${fileName}:`, error);
  //   }
  // });

  return (
    <Grid container>
      <Grid container>
        <Grid item xs={2}>
          <Typography variant="h6">10am</Typography>
          <Typography variant="h6"><img src="/images/1000.png"></img></Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6">10am</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6">10am</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6">10am</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6">10am</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6">10am</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
