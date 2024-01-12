import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

export default function SkillBar({ skill, value }) {
  let skillLevelChart = {
    25: "Beginner",
    50: "Intermediate",
    75: "Advanced",
  };
  let skillLevel;

  if (value >= 75) {
    skillLevel = skillLevelChart[75];
  } else if (value >= 50) {
    skillLevel = skillLevelChart[50];
  } else if (value >= 0) {
    skillLevel = skillLevelChart[25];
  }

  return (
    <Box pb={5}>
      <Grid
        container
        alignItems="center"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Grid item xs={6}>
          <Typography variant="h6" pb={1} textAlign="left">
            {skill}
          </Typography>
        </Grid>
        {/* Not sure if I want to display these words anyway, 
        plus the design is off between mobile and desktop */}
        {/* <Grid item xs={6} textAlign="right">
          <Typography variant="h7" >
            {skillLevel}
          </Typography>
        </Grid> */}
      </Grid>
      <Button
        variant="contained"
        sx={{
          backgroundImage: `linear-gradient(45deg, #9a61de, #15a8c4)`,
          color: "white",
          boxShadow: "0 0 20px 1px #15a8c4",
          "&:hover": {
            boxShadow: "0 0 20px 1px #15a8c4", // Negate glow on hover
          },
          textTransform: "none",
          fontSize: ".9rem",
          width: `${value}%`,
        }}
      ></Button>
    </Box>
  );
}
