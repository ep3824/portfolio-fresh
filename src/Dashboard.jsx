import React from "react";
import { Grid, Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import TrafficCount from "./TrafficCount";
import GitHub from "./GitHub";
import { useEffect } from "react";
import Weather from "./Weather";
import ChatGPT from "./ChatGPT";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

/**
 * Renders the Dashboard component.
 * Fetches weather data from the Tomorrow.io API and displays it along with other components.
 *
 * @returns {JSX.Element} The rendered Dashboard component.
 */

export default function Dashboard() {
  const [GitHubDataState, setGitHubDataState] = React.useState(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await fetch("/api/gitCommits");
        if (response.ok) {
          const GitHubData = await response.json();
          setGitHubDataState(GitHubData);
        } else {
          console.error(
            `Failed to fetch weather data. Status: ${response.status}`
          );
        }
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }
    };

    fetchGitHubData();
  }, []); // The empty dependency => effect runs once when the component mounts

  return (
    <div id="Dashboard">
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={1}
          justifyContent="space-between"
          alignItems="flex-start"
          sx={{ width: "100%" }}
          pb={30}
        >
          <Grid item xs={12}>
            <Item>
              <Weather xs={12} />
            </Item>
          </Grid>
          <Grid item xs={12} md={6}>
            <Item>
              <GitHub GitHubData={GitHubDataState} />
            </Item>
          </Grid>

          <Grid item xs={12} md={6}>
            <Item>
              <TrafficCount />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
