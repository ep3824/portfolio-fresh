import { Container, Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import EthanParentResume from "../EthanParentResume.pdf";

export default function About() {
  return (
    <div id="About">
      <Container>
        <Grid container sx={{ maxWidth: 700, margin: "0 auto" }} pb={30}>
          <Grid item xs={12}>
            <Typography variant="h2" pb={4} textAlign="left">
              software developer
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
                  backgroundImage: `linear-gradient(45deg, #9a61de, #15a8c4)`,
                  color: "white",
                  boxShadow: "0 0 20px 1px #15a8c4",
                  "&:hover": {
                    boxShadow: "0 0 10px 8px #15a8c4", // Adjust glow on hover
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
      </Container>
    </div>
  );
}
