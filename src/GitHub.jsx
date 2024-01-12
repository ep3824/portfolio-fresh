import { BarChart } from "@mui/x-charts";
import { Grid, Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

export default function GitHub({ GitHubData }) {
  let dates = [];
  let commits = [];
  const commitCounter = {};

  {
    GitHubData ? (
      GitHubData.forEach((commit) => {
        const utcDate = new Date(commit.commit.author.date);
        const formattedDate = utcDate.toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          timeSonze: "UTC",
        });

        commitCounter[formattedDate] = (commitCounter[formattedDate] || 0) + 1;
      })
    ) : (
      <div>
        <p>GitHub data loading....</p>
      </div>
    );
  }

  // Display the commit count for each day
  // If more than 4 days of commits, shorten to 4
  Object.entries(commitCounter).forEach(([date, count]) => {
    commits.push(count);
    dates.push(date);
  });

  

  if (commits.length && dates.length > 4) {
    commits.length = 4;
    dates.length = 4;
  }
  // Reverse the order of the arrays so that the most recent commits are displayed first
  commits = commits.reverse();
  dates = dates.reverse();

  GitHub.propTypes = {
    GitHubData: PropTypes.array,
  };

  return (
    <Box>
      {GitHubData ? (
        <Grid>
          <Grid>
            <Typography variant="h4" component="div" gutterBottom>
              Website Updates
            </Typography>
            <Box>
              <Typography variant="h6" component="div" gutterBottom>
                Displays last 4 days of updates
              </Typography>
            </Box>
            <Typography variant="h7" component="div" gutterBottom>
              Uses commit data from GitHub API
            </Typography>
          </Grid>
          <Box
            sx={{
              height: 260,
              borderRadius: 5,
              p: 2,
              boxShadow: "0 4px 8px rgba(0, 0, 0, .5)",
              backgroundImage:
                "linear-gradient(to right bottom, #44a048, #65ba69)", //green to green
            }}
          >
            <BarChart
              xAxis={[
                { scaleType: "band", data: dates }, // Assuming sequential numeric x values
              ]}
              yAxis={[{ label: "Updates" }]}
              series={[{ data: commits, color: "#fff", type: "bar" }]}
              padding={{
                left: 5,
                right: 5,
                top: 20,
                bottom: 20,
              }}
            />
          </Box>
          <Box />
        </Grid>
      ) : (
        <div>
          <p>GitHub data loading....</p>
        </div>
      )}
    </Box>
  );
}
