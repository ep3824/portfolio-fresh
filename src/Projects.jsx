import { Grid, Box, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ChatGPT from "./ChatGPT";
import PokeDex from "./Pokedex";
import { useState } from "react";
import Weather from "./Weather";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Projects() {
  const [chatAnswer, setChatAnswer] = useState(null);

  return (
    // Here we lift up state from child (ChatGPT) to projects, back down to child (PokeDex)
    <div id="Projects">
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h2" padding={4}>
          Projects
        </Typography>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Item>
              <ChatGPT chatAnswer={chatAnswer} setChatAnswer={setChatAnswer} />
            </Item>
          </Grid>
          <Grid item xs={12} md={6}>
            <Item>
              <PokeDex chatAnswer={chatAnswer} />
            </Item>
          </Grid>
          <Grid item xs={12} md={6}>
            <Item>
              <Weather />
            </Item>
          </Grid>
          <Grid item xs={12} md={6}>
            <Item>Project 3 </Item>
          </Grid>
          <Grid item xs={12} md={6}>
            <Item>Project 4</Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
