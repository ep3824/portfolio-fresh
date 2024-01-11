import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export default function ProjectsSection() {
  // sx={{
  //   backgroundColor: "#0f1724",
  //   border: "1px solid linear-gradient(45deg, #9a61de, #15a8c4)",
  //   borderRadius: "8px",
  //   padding: "20px",
  //   maxWidth: 345,
  //   width: "100%",
  //   color: "white",
  // }}

  const CustomButton = styled(Button)(() => ({

      backgroundImage: `linear-gradient(45deg, #9a61de, #15a8c4)`,
      color: 'white',
      boxShadow: "0 0 20px 1px #15a8c4",
      "&:hover": {
        boxShadow: "0 0 10px 8px #15a8c4", // Adjust glow on hover
      },
      textTransform: "none",
      fontSize: "1rem",
  }));

  //GitHub Button
  const CustomButton2 = styled(Button)(() => ({


    color: 'white',
    boxShadow: "0 0 5px 1px #15a8c4",
    "&:hover": {
      boxShadow: "0 0 10px 8px #15a8c4", // Adjust glow on hover
    },
    textTransform: "none",
    fontSize: "1rem",
}));

  return (
    <Grid>
      <Typography variant="h2" padding={10}>
        Projects
      </Typography>
      <Grid
        container
        spacing={5}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid item>
          <Box
            sx={{
              maxWidth: 345,
              border: "1px solid #15a8c4",
              borderRadius: "8px",
              padding: "20px",
            }}
          >
            <CardMedia
              component="img"
              alt="dashboard project picture"
              height="140"
              image="../dashboardPic.png"
            />

            <Typography gutterBottom variant="h5" component="div" textAlign={'left'} pt={2}>
              Dashboard
            </Typography>
            <Typography variant="body1" color="#9299ab" textAlign={'left'}>
              A dashboard I created to display weather, site updates, and other
              widgets. Enhanced with ChatGPT.
            </Typography>

            <CustomButton size="small" >Demo</CustomButton>
            <CustomButton2 size="small">GitHub</CustomButton2>
          </Box>
        </Grid>

        <Grid item>
          <Box
            sx={{
              maxWidth: 345,
              border: "1px solid #15a8c4",
              borderRadius: "8px",
              padding: "20px",

            }}
          >
            <CardMedia
              component="img"
              alt="dashboard project picture"
              height="140"
              image="../dashboardPic.png"
            />

            <Typography gutterBottom variant="h5" component="div" textAlign={'left'} pt={2}>
              Dashboard
            </Typography>
            <Typography variant="body1" color="#9299ab" textAlign={'left'}>
              A dashboard I created to display weather, site updates, and other
              widgets. Enhanced with ChatGPT.
            </Typography>

            <CustomButton size="small">Demo</CustomButton>
            <CustomButton size="small">GitHub</CustomButton>
          </Box>
        </Grid>

        <Grid item>
          <Box
            sx={{
              maxWidth: 345,
              border: "1px solid #15a8c4",
              borderRadius: "8px",
              padding: "20px",
              
            }}
          >
            <CardMedia
              component="img"
              alt="dashboard project picture"
              height="140"
              image="../dashboardPic.png"
            />

            <Typography gutterBottom variant="h5" component="div" textAlign={'left'} pt={2}>
              Dashboard
            </Typography>
            <Typography variant="body1" color="#9299ab" textAlign={'left'}>
              A dashboard I created to display weather, site updates, and other
              widgets. Enhanced with ChatGPT.
            </Typography>

            <CustomButton size="small">Demo</CustomButton>
            <CustomButton size="small">GitHub</CustomButton>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
