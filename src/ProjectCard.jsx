import PropTypes from "prop-types";
import { Grid, Box, CardMedia, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export default function ReusableCard({ image, title, description, pageLink }) {
  //Demo Button
  const CustomButton = styled(Button)(() => ({
    backgroundImage: `linear-gradient(45deg, #9a61de, #15a8c4)`,
    color: "white",
    boxShadow: "0 0 10px 1px #15a8c4",
    "&:hover": {
      boxShadow: "0 0 10px 8px #15a8c4", // Adjust glow on hover
    },
    textTransform: "none",
    fontSize: ".8rem",
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
    fontSize: ".8rem",
    margin: "10px",
  }));

  return (
    <Grid item xs={12} md={6} >
      <Box
        sx={{
          maxWidth: 375,
          border: "1px solid #7a72d8",
          padding: "15px",
          borderRadius: "15px",
          height: "24rem",
        }}
        
      >
        <CardMedia component="img" alt={title} height="140" image={image} />

        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textAlign={"left"}
          pt={2}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          color="#9299ab"
          textAlign={"left"}
          mb="20px"
          pb={2}
        >
          {description}
        </Typography>
        {/* For now, these projects will all just link to the same Projects Page,
        Eventually they will each get their own page */}
        <a href={pageLink} target="_blank" rel="noreferrer">
          <CustomButton size="small">Demo</CustomButton>
        </a>
        {/* And for now, these will just link to my general GitHub page */}
        <a href="https://www.github.com/ep3824" target="_blank" rel="noreferrer">
        <CustomButton2 size="small">GitHub</CustomButton2>
        </a>
      </Box>
    </Grid>
  );
}

ReusableCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  pageLink: PropTypes.string.isRequired,
};
