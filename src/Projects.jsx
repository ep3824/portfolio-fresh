import React from 'react';
import { Grid, Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import ChatGPT from './ChatGPT';
import PokeDex from './Pokedex';
import { useState } from 'react';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Projects() {

    const [chatAnswer, setChatAnswer] = useState(null);

    return (

        // Here we lift up state from child (ChatGPT) to projects, back down to child (PokeDex)

        <Box sx={{ flexGrow: 1 }}>
            <h2>Projects</h2>
            <Grid container >
                <Grid item xs={12} md={6}>
                    <Item><ChatGPT chatAnswer={chatAnswer} setChatAnswer={setChatAnswer}/></Item>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Item><PokeDex chatAnswer={chatAnswer} /></Item>
                </Grid>

                    

            </Grid>
        </Box>

    );
}