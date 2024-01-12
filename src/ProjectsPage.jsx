import { Grid, Box, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";



import Dashboard from "./Dashboard";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

// Create a dark theme
let darkTheme = createTheme({
  palette: {
    mode: "dark",
    // You can customize other theme options here
  },
});

darkTheme = responsiveFontSizes(darkTheme);

export default function ProjectsPage() {


  return (
    // !!!! Need to check on the below, not sure if I'm still doing that after edits
    // Here we lift up state from child (ChatGPT) to projects, back down to child (PokeDex)
    <ThemeProvider theme={darkTheme}>
      <div id="Projects">
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h2" padding={4}>
            Projects
          </Typography>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Item>
                <div id="Dashboard"></div>
                <Dashboard></Dashboard>
              </Item>
            </Grid>
            <Grid item xs={12} md={12}>
              <Item>Project 3 </Item>
            </Grid>
            <Grid item xs={12} md={12}>
              <Item>Project 4</Item>
            </Grid>
          </Grid>
        </Box>
      </div>
      <a href="/">Back to home</a>
    </ThemeProvider>
  );
}
