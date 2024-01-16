import React, { useEffect } from "react";
import { Grid, Box, Typography } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";
import HourlyWeather from "./HourlyWeather.jsx";
import DailyWeatherChart from "./DailyWeatherChart";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import apiForecastData from "../apiForecastData.js";
import styled from "@mui/material/styles/styled";
import weatherCodes from "../weatherCodes.json";

export default function Weather() {
  const [realtimeDataState, setRealtimeDataState] = React.useState(null);
  const [forecastDataState, setForecastDataState] = React.useState(null);
  const [isDaily, setIsDaily] = React.useState(true);

  useEffect(() => {
    const fetchRealtimeData = async () => {
      try {
        const response = await fetch("/api/realtime");
        if (response.ok) {
          const realtimeData = await response.json();
          setRealtimeDataState(realtimeData);
        } else {
          console.error(
            `Failed to fetch weather data. Status: ${response.status}`
          );
        }
      } catch (error) {
        console.error("Error fetching realtime weather data:", error);
      }
    };

    const fetchForecastData = async () => {
      try {
        const response = await fetch("/api/forecast");
        if (response.ok) {
          const forecastData = await response.json();
          //THIS LINE SHOULD BE DELETED BEFORE PROD
          // This is a workaround for the Tomorrow.io API rate limit
          setForecastDataState(apiForecastData);
          // setForecastDataState(forecastData);
          // console.log("forecastData", forecastData)
          // console.log("forecastDataState", forecastDataState)
        } else {
          console.error(
            `Failed to fetch weather data. Status: ${response.status}`
          );
        }
      } catch (error) {
        console.error("Error fetching Forecast data:", error);
      }
    };

    fetchRealtimeData();
    fetchForecastData();
  }, []); // The empty dependency => effect runs once when the component mounts

  function formatDateWithoutYear(inputDate) {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
    }).format(new Date(inputDate));
  }

  let temperatureF;
  let temperatureC;
  let feelsLikeF;
  let cloudCover;

  if (realtimeDataState) {
    temperatureF =
      Math.round((realtimeDataState.data.values.temperature * 9) / 5) + 32;
    temperatureC = Math.round(realtimeDataState.data.values.temperature);
    cloudCover = realtimeDataState.data.values.cloudCover;
    feelsLikeF =
      Math.round((realtimeDataState.data.values.temperatureApparent * 9) / 5) +
      32;
  }

  const weatherImg = cloudCover ? (
    cloudCover > 50 ? (
      <CloudIcon />
    ) : (
      <WbSunnyIcon />
    )
  ) : null;

  const tempsMax = [];
  const tempsMin = [];
  const days = [];
  const cloudCoverData = [];

  forecastDataState
    ? forecastDataState.timelines.daily.forEach((day) => {
        tempsMax.push(day.values.temperatureMax);
        tempsMin.push(day.values.temperatureMin);
        days.push(formatDateWithoutYear(day.time));
        cloudCoverData.push(day.values.cloudCoverAvg);
      })
    : [];

  //Convert temp data to F
  tempsMax.map(
    (temp, index) => (tempsMax[index] = Math.round((temp * 9) / 5 + 32))
  );
  tempsMin.map(
    (temp, index) => (tempsMin[index] = Math.round((temp * 9) / 5 + 32))
  );

  const submitHandler = (e) => {
    console.log(e.target);
    e.preventDefault();
    if (e.target.value === "Daily") {
      setIsDaily(true);
    } else if (e.target.value === "Hourly") {
      setIsDaily(false);
    }
  };

  const DashWidget = styled(Box)(() => ({
    maxWidth: 700,
    borderRadius: 30,
    pb: 5,
    height: "24rem",
    backgroundColor: "rgb(48, 122, 171, .3)", //blue to blue
    flexGrow: 1,
  }));

  return (
    <div id="Dashboard">
      <Box>
        {realtimeDataState ? (
          <Grid>
            <Grid>
              <Box>
                <Grid item xs={12}>
                  <Typography
                    variant="h3"
                    pb={3}
                    color="#fff"
                    textAlign={"left"}
                  >
                    Little Elm
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h1" component="div" textAlign={"left"}>
                    {temperatureF} °F
                  </Typography>
                </Grid>
              </Box>

              <Grid item>
                <Typography
                  variant="h6"
                  component="div"
                  gutterBottom
                  textAlign={"left"}
                >
                  {weatherCodes[realtimeDataState.data.values.weatherCode]}
                </Typography>
              </Grid>
              <Typography
                variant="h6"
                component="div"
                textAlign={"left"}
                pb={5}
              >
                {tempsMax[0]}° / {tempsMin[0]}° Feels like {feelsLikeF}°
              </Typography>
            </Grid>
            <Grid
              container
              margin={0}
              justifyContent="space-between"
              alignItems="flex-start"
              sx={{ width: "100%" }}
              pb={10}
            >
              <Grid item xs={12} md={12} pb={2}>
                <DashWidget>
                  <HourlyWeather />
                </DashWidget>
              </Grid>
              <Grid item xs={12} md={6} pb={2}>
                <DashWidget textAlign={"left"}>
                  <Typography> Today</Typography>
                  <Typography> Tuesday</Typography>
                  <Typography>Wednesday</Typography>
                  <Typography> Today</Typography>
                </DashWidget>
              </Grid>
              <Grid item xs={12} md={6} pb={2}>
                <DashWidget> </DashWidget>
              </Grid>
              <Grid item xs={12} md={6} pb={2}>
                <DashWidget> </DashWidget>
              </Grid>
              <Grid item xs={12} md={6} pb={2}>
                <DashWidget> </DashWidget>
              </Grid>
              <Grid item xs={12} md={6} pb={2}>
                <DashWidget> </DashWidget>
              </Grid>
              <Grid item xs={12} md={6} pb={2}>
                <DashWidget>
                  {/* This is the hourly/daily switcher */}
                  <Stack flexWrap="wrap" useFlexGap>
                    <TextField
                      select
                      label="Timeframe"
                      value={isDaily ? "Daily" : "Hourly"}
                      onChange={(e) => submitHandler(e)}
                      sx={{ minWidth: 150, width: "25%", zIndex: 9000 }}
                    >
                      <MenuItem value={"Hourly"}>Hourly</MenuItem>
                      <MenuItem value={"Daily"}>Daily</MenuItem>
                    </TextField>
                  </Stack>

                  {forecastDataState &&
                  isDaily &&
                  forecastDataState.timelines.daily.length > 0 ? (
                    <DailyWeatherChart forecastDataState={forecastDataState} />
                  ) : null}

                  {forecastDataState &&
                  !isDaily &&
                  forecastDataState.timelines.daily.length > 0 ? (
                    <HourlyWeatherChart forecastDataState={forecastDataState} />
                  ) : null}

                  {!forecastDataState ? (
                    <p>Forecast data is loading...</p>
                  ) : null}
                </DashWidget>
              </Grid>
            </Grid>
          </Grid>
        ) : (
          <p>Loading weather data...</p>
        )}
      </Box>
    </div>
  );
}
