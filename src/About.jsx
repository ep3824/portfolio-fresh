import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import EthanParentResume from "/images/EthanParentResume.pdf";

export default function About() {
  return (
    <div id="About">
        <Grid container sx={{ maxWidth: 1400, margin: "0 auto" }} pb={30} >
          <Grid item xs={12} >
            <Typography variant="h2" textAlign="left">
              software developer
            </Typography>
            <Typography variant="h4" pb={4} textAlign="left" pt={10}>
              welcome to my portfolio. this is where I have projects.
            </Typography>
          </Grid>
          <Grid item>
            <a
              href={EthanParentResume}
              download="MyResume"
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
                  fontSize: ".9rem",
                }}
              >
                Download Resume
              </Button>
            </a>
          </Grid>
        </Grid>
    </div>
  );
}
