import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";

// Granular @mui/material imports
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import styled from "@mui/material/styles/styled";

// Project/component imports
import HourlyWeather from "./HourlyWeather.jsx";
import DailyWeather from "./DailyWeather";
import PlacesAutocomplete from "./PlacesAutocomplete.jsx";
import ClothingRec from "./ClothingRec.jsx";
import weatherCodes from "../weatherCodes.json";

// Utility
import validator from "validator";


export default function Weather({ updateLocalTime, localTime }) {
  const [isLoading, setIsLoading] = useState(false);
  const [forecastDataState, setForecastDataState] = React.useState(null);
  const [selectedCity, setSelectedCity] = useState({
    description: "Frisco, TX, USA",
  });

  //Necessary to give API the dash version ("new-york" instead of "new york")
    const formatCityName = (cityName) => {
      return cityName
        .replace(/, /g, '-')
        .replace(/ /g, '-')
        .split(/-State|-municipality|-province/)[0];
    };

  const fetchForecastData = useCallback(async (cityNameNoState) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/forecast?city=${cityNameNoState}`);
      if (response.ok) {
        const forecastData = await response.json();
        if (forecastData && forecastData.timelines && forecastData.timelines.hourly && forecastData.timelines.daily) {
          setForecastDataState(forecastData);
          updateLocalTime(forecastData.timelines.hourly[0].time);
        } else {
          console.error('API response missing required timelines:', forecastData);
        }
      } else {
        console.error(`Failed to fetch weather data. Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error fetching Forecast data:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

 
  useEffect(() => {
    const cityNameNoState = formatCityName(selectedCity.description);
    fetchForecastData(cityNameNoState);
  }, [selectedCity, fetchForecastData]);

  function formatDateWithoutYear(inputDate) {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
    }).format(new Date(inputDate));
  }

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

  let temperatureF;
  // let temperatureC;
  let feelsLikeF;
  // let cloudCover;

  if (forecastDataState) {
    temperatureF =
      Math.round(
        (forecastDataState.timelines.minutely[0].values.temperature * 9) / 5
      ) + 32;
    // temperatureC = Math.round(realtimeDataState.data.values.temperature);
    // cloudCover = realtimeDataState.data.values.cloudCover;
    feelsLikeF =
      Math.round(
        (forecastDataState.timelines.minutely[0].values.temperatureApparent *
          9) /
          5
      ) + 32;
  }

  //Convert temp data to F
  tempsMax.map(
    (temp, index) => (tempsMax[index] = Math.round((temp * 9) / 5 + 32))
  );
  tempsMin.map(
    (temp, index) => (tempsMin[index] = Math.round((temp * 9) / 5 + 32))
  );

  const DashWidget = styled(Box)(() => ({
    maxWidth: 700,
    borderRadius: 30,
    pb: 5,
    backgroundColor: "rgb(48, 122, 171, .3)", //blue to blue
    flexGrow: 1,
    padding: 20,
  }));

  const handleCitySelect = (city) => {
    // Handle the selected city data
    setSelectedCity(city);
  };

  Weather.propTypes = {
    updateLocalTime: PropTypes.func,
  };

  let weatherCode;
  //If the API data has come back and if the weatherCode is an integer, proceed
  //(For validation, we coerce the weatherCode number to a string and then check if it's an integer)
  if (forecastDataState && validator.isInt(forecastDataState.timelines.minutely[0].values.weatherCode + '')) {
    weatherCode =
      forecastDataState.timelines.minutely[0].values.weatherCode;
  } else {
    weatherCode = 0;
  }

  return (
    <div id="Dashboard" style={{ textAlign: "left" }}>
      <Box>
        {forecastDataState && forecastDataState.timelines ? (
          <Grid container>
            <Grid item xs={12}>
              <Box>
                <Grid container alignItems={"center"}>
                  <Grid item xs={12}>
                    <Typography
                      variant="h3"
                      pb={3}
                      color="#fff"
                      textAlign={"left"}
                    >
                      {selectedCity.description}
                    </Typography>
                  </Grid>
                  <Grid item xs={9} lg={3}>
                    <PlacesAutocomplete onCitySelect={handleCitySelect} />
                  </Grid>
                  {
                    isLoading ? (
                      <Grid item xs={3} lg={5}>
                        <CircularProgress/>
                      </Grid>
                    ) : null
                  }
                </Grid>

                <Grid item xs={12}>
                  <Typography
                    variant="h1"
                    component="div"
                    textAlign={"left"}
                    fontWeight={"normal"}
                  >
                    <img
                      src={`/images/${weatherCode}.webp`}
                      // alt={`Weather for ${hour}`}
                      height="64px"
                      align="center"
                      style={{
                        verticalAlign: "middle",
                        marginRight: "2px",
                        marginTop: "-6px",
                      }}
                    />{" "}
                    {temperatureF} °F
                  </Typography>
                </Grid>
              </Box>

              <Grid item>
                <Typography
                  variant="h6"
                  component="div"
                  pb={4}
                  textAlign={"left"}
                >
                  {
                    weatherCodes[
                      forecastDataState.timelines.minutely[0].weatherCode
                    ]
                  }
                </Typography>
              </Grid>
              <Typography
                variant="h6"
                component="div"
                textAlign={"left"}
                pb={3}
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
                <DashWidget textAlign={"left"}>
                  <HourlyWeather forecastDataState={forecastDataState} />
                </DashWidget>
              </Grid>

              <Grid item xs={12} md={12} pb={2}>
                <DashWidget textAlign={"left"}>
                  <DailyWeather forecastDataState={forecastDataState} />
                </DashWidget>
              </Grid>
              <Grid item xs={12} md={12} pb={2}>
                <DashWidget>
                  <ClothingRec forecastDataState={forecastDataState} time={localTime}/>
                </DashWidget>
              </Grid>
              {/* <Grid item xs={12} md={6} pb={2}>
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
              </Grid> */}
            </Grid>
          </Grid>
        ) : (
          null
        )}
      </Box>
    </div>
  );
}
