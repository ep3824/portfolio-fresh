import React from 'react';
import { Container, Grid, Typography } from '@mui/material';

export default function About() {
    return (
        <div id="About">
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h2" component="h1" align="center" pt={20}>
                            About Me
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1" component="p" align="center" pb={20}>
                            Hi, I'm Ethan! I'm a passionate software developer with experience in JavaScript and React.
                            I love building web applications that are user-friendly and visually appealing.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};
