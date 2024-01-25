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

  //Do some work to convert day codes to night
  weatherCodesMin.map((code, index) => {
    switch (code) {
      case 1000:
        weatherCodesMin[index] = 10001;
        break;
      case 1100:
        weatherCodesMin[index] = 11001;
        break;
      case 1101:
        weatherCodesMin[index] = 11011;
        break;
      case 1102:
        weatherCodesMin[index] = 11021;
        break;
    }
  });

  return (
    <Grid container>
      {days.slice(0, 6).map((day, index) => {
        if (index === 0) {
          day = "Today";
        }
        let weatherCodeMax = weatherCodesMax[index];
        let weatherCodeMin = weatherCodesMin[index];
        return (
          <Grid container key={index} width={"1400px"}>
            <Grid item xs={1} md={3} pr={12}>
              <Typography>{day}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                <img
                  src="/images/waterDropClear.webp"
                  height="30px"
                  alt="Precipitation Chance"
                  display="inline"
                  style={{
                    verticalAlign: "middle",
                    marginRight: "2px",
                    marginTop: "-4px",
                  }}
                ></img>
                {precipChance[index]}%
              </Typography>
            </Grid>
            <Grid item xs={1} md={2} pr={3.5} pl={3.5}>
              <img
                src={`/images/${weatherCodeMax}.webp`}
                alt={`Weather max for ${day}`}
                height="25px"
              />
            </Grid>

            <Grid item xs={1} md={2} pr={9}>
              <img
                src={`/images/${weatherCodeMin}.webp`}
                alt={`Weather min for ${day}`}
                height="25px"
              />
            </Grid>
            <Grid item xs={1} md={2} pr={3.5}>
              <Typography variant="h7">{tempsMax[index]}°</Typography>
            </Grid>
            <Grid item xs={1} md={1}>
              <Typography variant="h7">{tempsMin[index]}°</Typography>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
}
