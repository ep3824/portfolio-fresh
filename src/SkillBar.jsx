import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
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
          backgroundImage: `linear-gradient(45deg, #026359, #0AA689)`,
          color: "white",
          boxShadow: "0 0 5px 1px #15a8c4",
          textTransform: "cursor",
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

