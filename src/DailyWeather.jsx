import PropTypes from "prop-types";
import { Grid, Typography } from "@mui/material";

export default function DailyWeather({ forecastDataState }) {
  const tempsMax = [];
  const tempsMin = [];
  const days = [];
  const weatherCodesMax = [];
  const weatherCodesMin = [];
  const precipChance = [];

  function formatDateWithoutYear(inputDate) {
    return new Intl.DateTimeFormat("en-US", {
      weekday: "long",
    }).format(new Date(inputDate));
  }

  if (forecastDataState) {
    forecastDataState.timelines.daily.forEach((day) => {
      tempsMax.push(day.values.temperatureMax);
      tempsMin.push(day.values.temperatureMin);
      days.push(formatDateWithoutYear(day.time));
      weatherCodesMax.push(day.values.weatherCodeMax);
      weatherCodesMin.push(day.values.weatherCodeMin);
      precipChance.push(day.values.precipitationProbabilityMax);
    });
  }

  //Convert temp data to F
  tempsMax.map(
    (temp, index) => (tempsMax[index] = Math.round((temp * 9) / 5 + 32))
  );
  tempsMin.map(
    (temp, index) => (tempsMin[index] = Math.round((temp * 9) / 5 + 32))
  );

  DailyWeather.propTypes = {
    forecastDataState: PropTypes.object,
  };

  return (
    <Grid container>
      {days.slice(0, 6).map((day, index) => {
        if (index === 0) {
          day = "Today";
        }
        const weatherCodeMax = weatherCodesMax[index];
        const weatherCodeMin = weatherCodesMin[index];
        return (
          <Grid container key={index}>
            <Grid item xs={2} pr={15}>
              <Typography>{day}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                <img
                  src="/images/waterDropClear.png"
                  height="20px"
                  alt="Precipitation Chance"
                  display="inline"
                  style={{ verticalAlign: 'middle', marginRight: '2px', marginTop: '-4px' }}
                ></img>
                {precipChance[index]}%
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <img
                src={`/images/${weatherCodeMin}.png`}
                alt={`Weather min for ${day}`}
              />
            </Grid>

            <Grid item xs={2}>
              <img
                src={`/images/${weatherCodeMax}.png`}
                alt={`Weather max for ${day}`}
              />
            </Grid>
            <Grid item xs={1} pr={4}>
              <Typography variant="h7">{tempsMax[index]}°</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="h7">{tempsMin[index]}°</Typography>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
}
