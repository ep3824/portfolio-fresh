import * as React from 'react';
import { BarChart } from '@mui/x-charts';
import { Grid, createTheme, ThemeProvider, Box, Typography } from '@mui/material';
import { DataArraySharp } from '@mui/icons-material';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// import { Curve } from 'recharts/lib/shape/Curve';

export default function GitHub({ GitHubData }) {


    let dates = [];
    let commits = [];
    const commitCounter = {};

    {
        GitHubData ? (
            GitHubData.forEach((commit) => {
                const utcDate = new Date(commit.commit.author.date)
                const formattedDate = utcDate.toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'short',
                    timeSonze: 'UTC',
                });

                commitCounter[formattedDate] = (commitCounter[formattedDate] || 0) + 1; // Increment the count for the specific date
            })

        ) : (
            <div>
                <p>GitHub data loading....</p>
            </div>
        )
    }



    // Display the commit count for each day
    // If more than 4 days of commits, shorten to 4
    const commitCountByDay = Object.entries(commitCounter).forEach(([date, count]) => (
        commits.unshift(count)
    ));

    Object.entries(commitCounter).forEach(([date, count]) => (dates.unshift(date)));

    if (commits.length && dates.length > 4) {
        commits.length = 4;
        dates.length = 4;
    }

    return (

        <Box>
            {GitHubData ? (
                <Grid>
                    <Grid >
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
                            boxShadow: '0 4px 8px rgba(0, 0, 0, .5)',
                            backgroundImage: 'linear-gradient(to right bottom, #44a048, #65ba69)', //green to green
                        }}
                    >
                        <BarChart
                            xAxis={[
                                { scaleType: 'band', data: dates } // Assuming sequential numeric x values
                            ]}
                            yAxis={[
                                { label: 'Updates' }
                            ]}
                            series={[
                                { data: commits, color: '#fff', type: 'bar' },
                            ]}
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


