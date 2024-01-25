import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";

export default function HourlyWeather({ forecastDataState }) {
  const hourlyTemps = [];
  const hours = [];
  const weatherCodes = [];
  const precipChance = [];

  function formatDateWithoutYear(inputDate) {
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
    }).format(new Date(inputDate));
  }

  if (forecastDataState) {
    forecastDataState.timelines.hourly.forEach((hour) => {
      hourlyTemps.push(hour.values.temperature);
      hours.push(formatDateWithoutYear(hour.time));
      weatherCodes.push(hour.values.weatherCode);
      precipChance.push(hour.values.precipitationProbability);
    });
  }

  //Convert temp data to F
  hourlyTemps.map(
    (temp, index) => (hourlyTemps[index] = Math.round((temp * 9) / 5 + 32))
  );

  HourlyWeather.propTypes = {
    forecastDataState: PropTypes.object,
  };

  return (
    <Grid container>
      <Grid container>
        {/* I'm limiting this to only 6 hours initially because I haven't figure out
        scrolling yet */}
        {hours.slice(0, 6).map((hour, index) => {
          const weatherCode = weatherCodes[index];
          return (
            <Grid item xs={2} key={index}>
              <Typography variant="body2" sx={{opacity: .8}}>{hour}</Typography>
              {weatherCode && (
                <img
                  src={`/images/${weatherCode}.webp`}
                  alt={`Weather for ${hour}`}
                  height="30px"
                  align="center"
                />
              )}
              <Typography variant="h6" pb={4}>{hourlyTemps[index]}°</Typography>
              <Grid item>
              <img
                  src="/images/waterDropClear.webp"
                  height="20px"
                  alt="Precipitation Chance"
                  display="inline"
                ></img>
              <Typography variant="body2" sx={{opacity: .8}}>
                {precipChance[index]}%
              </Typography>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}
