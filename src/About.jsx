import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import EthanParentResume from "/images/EthanParentResume.pdf";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div id="About">
      <Grid
        container
        sx={{ maxWidth: 1400 }}
        pt={isMobile ? 10 : 20}
        pb={isMobile ? 10 : 20}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              sx={{
                backgroundcolor: "primary",
                backgroundImage: `linear-gradient(45deg, #026359, #02facc)`,
                backgroundSize: "100%",
                backgroundRepeat: "repeat",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              hello, I&apos;m ethan,
            </Typography>
            <Typography variant="h2" textAlign="left">
              software developer
            </Typography>
            <Typography variant="h4" pb={4} textAlign="left" pt={10}>
              welcome to my portfolio. this is where I have projects.
            </Typography>
            <a
              href={EthanParentResume}
              download="MyResume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                variant="contained"
                sx={{
                  backgroundImage: `linear-gradient(45deg, #026359, #0AA689)`,
                  color: "white",
                  boxShadow: "0 0 20px 1px #0D8C7F",
                  "&:hover": {
                    boxShadow: "0 0 10px 8px #0D8C7F", // Adjust glow on hover
                  },
                  textTransform: "none",
                  fontSize: "1.2rem",
                }}
              >
                Download Resume
              </Button>
            </a>
          </Grid>
          <Grid item md={6}>
            <Box>
              {/* placeholder for image */}
              {/* <img height="100px" src={`${tPayLogo}`} alt="tPay Logo"></img> */}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
