import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";

export default function ClothingRec({ forecastDataState, time }) {
  const clothingWeatherPair = {
    4001: {
      description: ["rainy"],
      top: ["rain jacket", "umbrella"],
      bottom: ["rain pants"],
      feet: ["rain boots"],
    },
    5000: {
      description: ["snowy"],
      top: ["winter jacket"],
      bottom: ["snow pants"],
      feet: ["snow boots"],
    },
    1000: {
      description: ["clear and sunny"],
      top: ["long sleeve shirt"],
      bottom: ["pants"],
      feet: ["shoes"],
    },
    10001: {
      description: ["clear nightime"],
      top: ["long sleeve shirt"],
      bottom: ["pants"],
      feet: ["shoes"],
    },
    1001: {
      description: ["cloudy"],
      top: ["long sleeve shirt"],
      bottom: ["pants"],
      feet: ["shoes"],
    },
    2000: {
      description: ["foggy"],
      top: ["long sleeve shirt"],
      bottom: ["pants"],
      feet: ["shoes"],
    },
    1100: {
      description: ["partly cloudy"],
      top: ["long sleeve shirt"],
      bottom: ["pants"],
      feet: ["shoes"],
    },
    1101: {
      description: ["partly cloudy"],
      top: ["long sleeve shirt"],
      bottom: ["pants"],
      feet: ["shoes"],
    },
    11001: {
      description: ["partly cloudy"],
      top: ["long sleeve shirt"],
      bottom: ["pants"],
      feet: ["shoes"],
    },
  };

  let isSnowy = false;
  let isClear = false;
  let isCold = false;
  let isRainy = false;
  let isFoggy = false;
  if (forecastDataState) {
    forecastDataState.timelines.hourly.forEach((hour) => {
      if (hour.values.temperature < 40) {
        isCold = true;
      }
      if (hour.values.weatherCode === 4001) {
        isRainy = true;
      }
      if (hour.values.weatherCode === 5000) {
        isSnowy = true;
      }
      if (hour.values.weatherCode === 1000) {
        isClear = true;
      }
      if (hour.values.weatherCode === 2000) {
        isFoggy = true;
      }
    });
  }

  function TimeConverter({ utcString }) {
    const date = new Date(utcString);

    const localTimeString = date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });

    return <>{localTimeString}</>
  }

  
    let isNight = false;
    let isCloudy = false;
    
    let isPartlyCloudy = false;
    let isPartlyCloudyNight = false;
    let isPartlyCloudyDay = false;



  ClothingRec.propTypes = {
    forecastDataState: PropTypes.object,
  };
  const weatherCode =
    forecastDataState.timelines.hourly[0].values.weatherCode;

  return (
    <div id="ClothingRec">
      <Grid>
        <Typography variant="h6" pb={4} textAlign={"left"}>
          Clothing Recommendation for today's{" "}
          {clothingWeatherPair[weatherCode].description} weather:
        </Typography>
        <Typography variant="body1" pb={4} textAlign={"left"}>
            {/* It's a {clothingWeatherPair[weatherCode].description} day, make sure to wear a {clothingWeatherPair[weatherCode].top} and {clothingWeatherPair[weatherCode].bottom}! */}
            As of <TimeConverter utcString={time}/> the weather is {isCold ? "cold" : "warm"} {isRainy ? " and rainy" : null} { isSnowy ? " and snowy" : null} { isFoggy ? " and foggy" : null} { isClear ? " and sunny" : null}   today, so make sure to wear a {isCold ? "jacket" : "t-shirt"} and {isRainy ? "bring an umbrella" : "bring a pair of sunglasses"}!
        </Typography>
        <Grid>
            
        </Grid>
      </Grid>
    </div>
  );
}
