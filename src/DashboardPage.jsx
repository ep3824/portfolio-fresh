import { Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import "@fontsource-variable/red-hat-text";
import Navbar2 from "./Navbar2";
import Weather from "./Weather";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { useEffect, useCallback } from "react";
import React from "react";

// Create a dark theme
let darkTheme = createTheme({
  palette: {
    mode: "dark",
    // You can customize other theme options here
  },
  typography: {
    fontFamily: `"Red Hat Text Variable", sans-serif`,
  },
});

darkTheme = responsiveFontSizes(darkTheme);

const interpolateColors = (color1, color2, factor) => {
  const result = color1.map((channel, index) =>
    Math.round(channel + factor * (color2[index] - channel))
  );
  return `rgb(${result.join(", ")})`;
};

export default function DashboardPage() {
  const [localTime, setLocalTime] = React.useState(null);
  const [sunColor, setSunColor] = React.useState("#2c86c1");

  //Can change the background color of the entire page here
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? `${sunColor}` : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  // <-- Background Color Logic Starts -->

  const getColorBasedOnTime = () => {
    const now = new Date(localTime);
    const hours = now.getHours();
    const totalDayHours = 24;

    const colors = [
      [28, 52, 96],   // #1C3460
      [57, 93, 140],  // #395D8C
      [86, 129, 166], // #80A2BF
      [86, 129, 166], // #80A2BF
      [128, 162, 191], // #5681A6
      [57, 93, 140],  // #395D8C
      [28, 52, 96],   // #1C3460
    ];

    const colorIndex = Math.floor((hours / totalDayHours) * colors.length);
    const currentColor = colors[colorIndex];
    const nextColor = colors[(colorIndex + 1) % colors.length];
    const factor =
      (hours % (totalDayHours / colors.length)) /
      (totalDayHours / colors.length);

    return interpolateColors(currentColor, nextColor, factor);
  };

  const updateLocalTime = useCallback((time) => {
    setLocalTime(time);
  }, []);

  const changeBackgroundColor = () => {
    setSunColor(getColorBasedOnTime());
  };

  // <-- Background Color Logic Ends -->

  useEffect(() => {
    if (localTime) {
      changeBackgroundColor();
    }
  }, [localTime]);

  return (
    <ThemeProvider theme={darkTheme}>
      <div id="Dashboard">
        <div className="card">
          <Navbar2></Navbar2>
        </div>
        <Item>
          <Grid container sx={{ maxWidth: 1400, margin: "0 auto"}} padding={1}>
            <Grid item xs={12}>
              <div id="Dashboard"></div>
              <Weather updateLocalTime={updateLocalTime} localTime={localTime}></Weather>
            </Grid>
          </Grid>
        </Item>
      </div>
    </ThemeProvider>
  );
}