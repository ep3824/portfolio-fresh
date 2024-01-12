import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";

export default function SkillBar({skill, value}) {


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

SkillBar.propTypes = {
  skill: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

