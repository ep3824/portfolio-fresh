import PropTypes from "prop-types";
import { Grid, Box, CardMedia, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export default function ReusableCard({ image, title, description }) {
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
    <Grid item xs={12} md={6}>
      <Box
        sx={{
          maxWidth: 375,
          border: "1px solid #7a72d8",
          padding: "20px",
          borderRadius: "15px",
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
        >
          {description}
        </Typography>

        <CustomButton size="small">Demo</CustomButton>
        <CustomButton2 size="small">GitHub</CustomButton2>
      </Box>
    </Grid>
  );
}

ReusableCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
