import { Container, Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";

export default function About() {
  return (
    <div id="About">
      <Container>
        <Grid container sx={{ maxWidth: 700, margin: "0 auto" }} pb={20}>
          <Grid item xs={12}>
            <Typography variant="h4" pb={4} textAlign="left">
              fullstack software developer
            </Typography>
          </Grid>
          <Grid item >
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
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
