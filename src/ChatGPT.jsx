import { useEffect } from "react";
import { useState } from "react";
import OpenAI from "openai";
import CHATGPT_API_KEY from "../deleteLater.js";
import { Grid, Box, Paper, TextField } from "@mui/material";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import PropTypes from "prop-types";

const openai = new OpenAI({
  apiKey: CHATGPT_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default function ChatGPT({ chatAnswer, setChatAnswer }) {
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonImages, setPokemonImages] = useState(null);

  async function askChatGPT(userInput) {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: userInput }],
      model: "gpt-3.5-turbo",
    });

    if (completion) {
      setChatAnswer(completion.choices[0].message.content);
    }

    console.log(completion.choices[0]);
  }

  useEffect(() => {
    const getPokemonData = async () => {
      try {
        const response = await fetch("/api/listPokemon");
        if (response.ok) {
          const pokemonData = await response.json();
          setPokemonData(pokemonData);
        } else {
          console.error(
            `Failed to fetch pokemon data. Status: ${response.status}`
          );
        }
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };

    getPokemonData();
  }, []); // The empty dependency array ensures that the effect runs once when the component mounts

  // fire the render image fn when chatAnswer is updated
  useEffect(() => {
    if (chatAnswer && pokemonData) {
      renderPokemonImage();
    }
  }, [chatAnswer, pokemonData]);

  const renderPokemonImage = async () => {
    const pokeNames = [];
    const pokeImages = [];
    pokemonData.results.map((pokemon) =>
      pokeNames.push(pokemon.name.toLowerCase())
    );
    for (let i = 0; i < pokeNames.length; i++) {
      // the regex here is so we can avoid matching to words that aren't actually poke  names
      // and at the same time so we can grab names in a comma seperated list
      if (chatAnswer.toLowerCase().split(/[ ,]+/).includes(pokeNames[i])) {
        const pokemonName = pokeNames[i];
        const pokemonImage = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        )
          .then((response) => response.json())
          .then((data) => data.sprites.front_default);
        console.log(pokemonImage);
        pokeImages.push({ name: pokemonName, image: pokemonImage });
        console.log("poke image array", pokeImages);
        // return pokemonImage;
      } else {
        console.log("No Pokemon found in answer");
      }
    }
    setPokemonImages(pokeImages);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const userInput = e.target[0].value;
    // Probably don't need to set state right here, will delete later if not needed
    askChatGPT(userInput);
  };

  ChatGPT.propTypes = {
    chatAnswer: PropTypes.string.isRequired,
    setChatAnswer: PropTypes.func.isRequired,
  };

  // main();
  return (
    <Box>
      <Grid>
        <Paper
          sx={{
            // height: 260,
            borderRadius: 5,
            p: 2,
            boxShadow: "0 4px 8px rgba(0, 0, 0, .5)",
            backgroundImage: "linear-gradient(to right bottom, red, magenta)",
          }}
        >
          <Typography variant="h5" component="div" gutterBottom>
            Ethandroid 5000
          </Typography>
          <form onSubmit={(e) => submitHandler(e)}>
            {/* <StyledInput placeholder="Ask me anything!" /> */}
            <Stack
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              direction="row"
              divider={
                <Divider
                  orientation="vertical"
                  sx={{ borderBottomWidth: 50, borderColor: "#c765b4" }}
                />
              }
              spacing={1.5}
            >
              <TextField label="Ask me anything!" />
              <Button variant="outlined" type="submit">
                Submit
              </Button>
            </Stack>
          </form>

          {chatAnswer !== null ? (
            <Typography variant="h7" component="div" gutterBottom>
              {chatAnswer}
            </Typography>
          ) : (
            <Typography variant="h7" component="div" gutterBottom>
              I will respond when I&apos;m ready...
            </Typography>
          )}

          {pokemonImages !== null ? (
            <Typography variant="h7" component="div" gutterBottom>
              {pokemonImages.map((pokemon) => (
                <img
                  src={pokemon.image}
                  alt={pokemon.name}
                  key={pokemon.name}
                />
              ))}
            </Typography>
          ) : (
            <Typography variant="h7" component="div" gutterBottom>
              Try asking me about Pokemon!
            </Typography>
          )}
        </Paper>
      </Grid>
    </Box>
  );
}
