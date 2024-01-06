import React from 'react';
import OpenAI from "openai";
import CHATGPT_API_KEY from "../deleteLater.js";
import { Grid, Box, Paper } from '@mui/material';
import { createTheme, ThemeProvider, Typography } from '@mui/material';
import { FormControl, useFormControlContext } from '@mui/base/FormControl';
import { Input, inputClasses } from '@mui/base/Input';
import styled from '@mui/system/styled';
import clsx from 'clsx';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const openai = new OpenAI({ apiKey: CHATGPT_API_KEY, dangerouslyAllowBrowser: true });

export default function ChatGPT() {

  async function main() {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: "Give me a fun project I can do to showcase my React skills." }],
      model: "gpt-4",
    });

    console.log(completion.choices[0]);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('submitHandler');
  }

  // main();
  return (
    
      <Box>
        <Grid>
          <Paper
            sx={{
              height: 260,
              borderRadius: 5,
              p: 2,
              boxShadow: '0 4px 8px rgba(0, 0, 0, .5)',
              backgroundImage: 'linear-gradient(to right bottom, red, magenta)', 
            }}
          >
            <Typography variant="h5" component="div" gutterBottom>
              Ethandroid 5000
            </Typography>
            <Typography variant="h7" component="div" gutterBottom>
              Ask it something:
            </Typography>

            <FormControl defaultValue="" required label="input text" onSubmit={submitHandler}>
              <StyledInput placeholder="Ask me anything!" />
              <HelperText />
              {/* <Stack direction="row" spacing={2}>
                <Button variant="outlined">Primary</Button>
                <Button variant="outlined" disabled>
                  Disabled
                </Button>
                <Button variant="outlined" href="#outlined-buttons">
                  Link
                </Button>
              </Stack> */}
            </FormControl>

            <Typography variant="h7" component="div" gutterBottom>
              I will respond when I'm ready...
            </Typography>
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


