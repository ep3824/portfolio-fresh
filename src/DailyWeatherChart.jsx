import { LineChart } from "@mui/x-charts/LineChart";
import PropTypes from "prop-types";

export default function DailyWeatherChart({ forecastDataState }) {
  const tempsMax = [];
  const tempsMin = [];
  const days = [];

  function formatDateWithoutYear(inputDate) {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
    }).format(new Date(inputDate));
  }

  forecastDataState
    ? forecastDataState.timelines.daily.map((day) =>
        tempsMax.push(day.values.temperatureMax)
      )
    : [];
  forecastDataState
    ? forecastDataState.timelines.daily.map((day) =>
        tempsMin.push(day.values.temperatureMin)
      )
    : [];
  forecastDataState
    ? forecastDataState.timelines.daily.map((day) =>
        days.push(formatDateWithoutYear(day.time))
      )
    : [];

  //Convert temp data to F
  tempsMax.map(
    (temp, index) => (tempsMax[index] = Math.round((temp * 9) / 5 + 32))
  );
  tempsMin.map(
    (temp, index) => (tempsMin[index] = Math.round((temp * 9) / 5 + 32))
  );

  DailyWeatherChart.propTypes = {
    forecastDataState: PropTypes.object,
  };

  return (
    <LineChart
      xAxis={[
        {
          type: "time",
          data: days,
          scaleType: "point",
          orientation: "bottom",
        },
      ]}
      yAxis={[
        {
          type: "linear",
          orientation: "left",
          id: "temperature",
          name: "Temperature (°F)",
          unit: "°C",
          label: "Temperature (°F)",
        },
      ]}
      series={[
        {
          curve: "linear",
          type: "line",
          data: tempsMax,
          label: "Max Temp (°F)",

          yAxisId: "temperature",
          name: "Temperature",
          color: "pink",
          strokeWidth: 3,
        },
        {
          curve: "linear",
          type: "line",
          data: tempsMin,
          label: "Min Temp (°F)",

          yAxisId: "temperature",
          name: "Temperature",
          color: "lightblue",
          strokeWidth: 3,
        },
      ]}
      padding={{
        left: 5,
        right: 5,
        top: 20,
        bottom: 20,
      }}
      sx={{
        path: {
          strokeWidth: 4,
        },
      }}
    />
  );
}
