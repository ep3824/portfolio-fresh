import React from 'react';
import { Grid, Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Projects() {
    return (

        <Box sx={{ flexGrow: 1 }}>
            <h2>Projects</h2>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs>
                    <Item>Project 1</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>Project 2</Item>
                </Grid>
                <Grid item xs>
                    <Item>Project 3</Item>
                </Grid>
            </Grid>
        </Box>

    );
}