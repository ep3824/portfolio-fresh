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
    color: "white",
    boxShadow: "0 0 10px 1px #15a8c4",
    "&:hover": {
      boxShadow: "0 0 10px 8px #15a8c4", // Adjust glow on hover
    },
    textTransform: "none",
    fontSize: "1rem",
    margin: "10px",
  }));

  //GitHub Button
  const CustomButton2 = styled(Button)(() => ({
    color: "white",
    boxShadow: "0 0 5px 1px #15a8c4",
    "&:hover": {
      boxShadow: "0 0 10px 8px #15a8c4", // Adjust glow on hover
    },
    textTransform: "none",
    fontSize: "1rem",
    margin: "10px",
  }));

  return (
    <Grid >
      <Grid
        container
        spacing={3}
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{ maxWidth: 1200, margin: "0 auto" }}
      >
        <Grid item xs={12}>
          <Typography variant="h3" pb={4}  textAlign={"left"}>
            Projects
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} sx={{ maxWidth: 345 }}>
          <Box
            sx={{
              maxWidth: 375,
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

            <Typography
              gutterBottom
              variant="h5"
              component="div"
              textAlign={"left"}
              pt={2}
            >
              Dashboard 1
            </Typography>
            <Typography
              variant="body1"
              color="#9299ab"
              textAlign={"left"}
              mb="20px"
            >
              A dashboard I created to display weather, site updates, and other
              widgets. Enhanced with ChatGPT.
            </Typography>

            <CustomButton size="small">Demo</CustomButton>
            <CustomButton2 size="small">GitHub</CustomButton2>
          </Box>
        </Grid>

        <Grid item xs={12} md={6} sx={{ maxWidth: 345 }}>
          <Box
            sx={{
              maxWidth: 375,
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

            <Typography
              gutterBottom
              variant="h5"
              component="div"
              textAlign={"left"}
              pt={2}
            >
              Dashboard 2
            </Typography>
            <Typography
              variant="body1"
              color="#9299ab"
              textAlign={"left"}
              mb="20px"
            >
              A dashboard I created to display weather, site updates, and other
              widgets. Enhanced with ChatGPT.
            </Typography>

            <CustomButton size="small">Demo</CustomButton>
            <CustomButton2 size="small">GitHub</CustomButton2>
          </Box>
        </Grid>

        <Grid item xs={12} md={6} sx={{ maxWidth: 345 }}>
          <Box
            sx={{
              maxWidth: 375,
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

            <Typography
              gutterBottom
              variant="h5"
              component="div"
              textAlign={"left"}
              pt={2}
            >
              Dashboard 3
            </Typography>
            <Typography
              variant="body1"
              color="#9299ab"
              textAlign={"left"}
              mb="20px"
            >
              A dashboard I created to display weather, site updates, and other
              widgets. Enhanced with ChatGPT.
            </Typography>

            <CustomButton size="small">Demo</CustomButton>
            <CustomButton2 size="small">GitHub</CustomButton2>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
