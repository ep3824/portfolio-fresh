import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Grid, createTheme, ThemeProvider, Box, Typography } from '@mui/material';

export default function GitHub({GitHubData}) {
    
    
    let dates = [];
    let commits = [];
    const commitCounter = {};

    {GitHubData ? (
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
    )}

    

    // Display the commit count for each day
    const commitCountByDay = Object.entries(commitCounter).forEach(([date, count]) => (
        commits.unshift(count)
    ));

    Object.entries(commitCounter).forEach(([date, count]) => ( dates.unshift(date) ));

    // Create a dark theme
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            // You can customize other theme options here
        },
    });

    return (
        
            <Box>
                {GitHubData ? (
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
                            sx={{
                                borderRadius: 15,
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


