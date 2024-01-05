import gitHubCommitOutput from "../gitHubCommitOutput";
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Grid, createTheme, ThemeProvider, Box, Typography } from '@mui/material';

export default function GitHub() {
    const commitCounter = {};

    gitHubCommitOutput.forEach((commit) => {
        const utcDate = new Date(commit.commit.author.date)
        const formattedDate = utcDate.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            timeSonze: 'UTC',
        });
        // const commitDate = commit.commit.author.date.split('T')[0]; // Extract the date from the commit's timestamp
        commitCounter[formattedDate] = (commitCounter[formattedDate] || 0) + 1; // Increment the count for the specific date
    });

    // Display the commit count for each day
    const commitCountByDay = Object.entries(commitCounter).map(([date, count]) => (
        <p key={date}>{`${date}: ${count}`}</p>
    ));
    console.log(commitCountByDay[0], "That is the gitHubCommitOutput for the first item in arr")

    //Just for testing some data
    const testData = [
        { date: 'Jan 5', commits: 2 },
        { date: 'Jan 4', commits: 7 },
        { date: 'Jan 3', commits: 5 },
    ]

    const testDataArr = [

    ]
    // Create a dark theme
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            // You can customize other theme options here
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <Box>
                <Grid>
                    <Grid >
                        <Typography variant="h5" component="div" gutterBottom>
                            Website Updates
                        </Typography>
                        <Box>
                            <Typography variant="h7" component="div" gutterBottom>
                                Sample text
                            </Typography>

                        </Box>
                        <Typography variant="h7" component="div" gutterBottom>
                            Sample text
                        </Typography>
                        <Typography variant="h7" component="div" gutterBottom>
                            Image
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
                                { scaleType: 'band', data: ["Jan 1", "Jan 2", "Jan 3", "Jan 4"] } // Assuming sequential numeric x values
                            ]}
                            yAxis={[
                                { label: 'Updates' }
                            ]}
                            series={[
                                { data: [4, 8, 6, 2], color: '#fff', type: 'bar' },
                            ]}
                            padding={{
                                left: 5,
                                right: 5,
                                top: 20,
                                bottom: 20,
                            }}
                            sx={{
                                borderRadius: 15,
                            }}

                        />
                    </Box>
                    <Box />
                </Grid>
            </Box>
        </ThemeProvider>
    );
}


