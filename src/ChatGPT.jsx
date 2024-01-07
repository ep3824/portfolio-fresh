import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import OpenAI from "openai";
import CHATGPT_API_KEY from "../deleteLater.js";
import { Grid, Box, Paper, TextField } from '@mui/material';
import { createTheme, ThemeProvider, Typography } from '@mui/material';
import { FormControl, useFormControlContext } from '@mui/base/FormControl';
import { Input, inputClasses } from '@mui/base/Input';
import styled from '@mui/system/styled';
import clsx from 'clsx';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { render } from 'react-dom';
import Divider from '@mui/material/Divider';

const openai = new OpenAI({ apiKey: CHATGPT_API_KEY, dangerouslyAllowBrowser: true });

export default function ChatGPT() {
  const [inputValue, setInputValue] = useState('');
  const [chatAnswer, setChatAnswer] = useState(null);
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonImages, setPokemonImages] = useState(null);

  async function askChatGPT(userInput) {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: userInput }],
      model: "gpt-3.5-turbo",
    });

    if (completion) {
      setChatAnswer(completion.choices[0].message.content)
    }

    console.log(completion.choices[0]);
  }

  useEffect(() => {
    const getPokemonData = async () => {
      try {
        const response = await fetch('/api/listPokemon');
        if (response.ok) {
          const pokemonData = await response.json();
          setPokemonData(pokemonData);
        } else {
          console.error(`Failed to fetch pokemon data. Status: ${response.status}`);
        }
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
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
    pokemonData.results.map((pokemon) => pokeNames.push(pokemon.name.toLowerCase()));
    for (let i = 0; i < pokeNames.length; i++) {
      if (chatAnswer.toLowerCase().includes(pokeNames[i])) {
        const pokemonName = pokeNames[i];
        const pokemonImage = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
          .then((response) => response.json())
          .then((data) => data.sprites.front_default);
        console.log(pokemonImage);
        pokeImages.push({ name: pokemonName, image: pokemonImage });
        console.log('poke image array', pokeImages);
        // return pokemonImage;
      } else {
        console.log('No Pokemon found in answer')
      }
    }
    setPokemonImages(pokeImages);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const userInput = e.target[0].value;
    console.log(e.target[0].value);
    // Probably don't need to set state right here, will delete later if not needed
    askChatGPT(userInput)
  }



  // main();
  return (
    <Box>
      <Grid>
        <Paper
          sx={{
            // height: 260,
            borderRadius: 5,
            p: 2,
            boxShadow: '0 4px 8px rgba(0, 0, 0, .5)',
            backgroundImage: 'linear-gradient(to right bottom, red, magenta)',
          }}
        >
          <Typography variant="h5" component="div" gutterBottom>
            Ethandroid 5000
          </Typography>



          <form onSubmit={e => submitHandler(e)} >
            {/* <StyledInput placeholder="Ask me anything!" /> */}


            <Stack

              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              direction="row"
              divider={<Divider orientation="vertical" sx={{ borderBottomWidth: 50, borderColor: '#c765b4' }} />}
              spacing={1.5}
            >
              <TextField label="Ask me anything!" />
              <Button variant="outlined" type="submit">Submit</Button>
            </Stack>


          </form>


          {chatAnswer !== null ? (
            <Typography variant="h7" component="div" gutterBottom>
              {chatAnswer}
            </Typography>
          ) : (
            <Typography variant="h7" component="div" gutterBottom>
              I will respond when I'm ready...
            </Typography>
          )}

          {pokemonImages !== null ? (
            <Typography variant="h7" component="div" gutterBottom>
              {pokemonImages.map((pokemon) => <img src={pokemon.image} alt={pokemon.name} />)}
            </Typography>
          ) : (
            <Typography variant="h7" component="div" gutterBottom>
              Try asking me about Pokemon!
            </Typography>
          )
          }
        </Paper>
      </Grid>
    </Box>



  )
}


const StyledInput = styled(Input)(
  ({ theme }) => `

  .${inputClasses.input} {
    width: 320px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      outline: 0;
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    }
  }
`,
);

const Label = styled(({ children, className }) => {
  const formControlContext = useFormControlContext();
  const [dirty, setDirty] = React.useState(false);

  React.useEffect(() => {
    if (formControlContext?.filled) {
      setDirty(true);
    }
  }, [formControlContext]);

  if (formControlContext === undefined) {
    return <p>{children}</p>;
  }

  const { error, required, filled } = formControlContext;
  const showRequiredError = dirty && required && !filled;

  return (
    <p className={clsx(className, error || showRequiredError ? 'invalid' : '')}>
      {children}
      {required ? ' *' : ''}
    </p>
  );
})`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  margin-bottom: 4px;

  &.invalid {
    color: red;
  }
`;

const HelperText = styled((props) => {
  const formControlContext = useFormControlContext();
  const [dirty, setDirty] = React.useState(false);

  React.useEffect(() => {
    if (formControlContext?.filled) {
      setDirty(true);
    }
  }, [formControlContext]);

  if (formControlContext === undefined) {
    return null;
  }

  const { required, filled } = formControlContext;
  const showRequiredError = dirty && required && !filled;

  return showRequiredError ? <p {...props}>This field is required.</p> : null;
})`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
`;

const blue = {
  100: '#DAECFF',
  200: '#b6daff',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};


