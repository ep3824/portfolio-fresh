import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function ReusableCard({ image, title, description, pageLink, hasDemo }) {
  //Demo Button
  const CustomButton = styled(Button)(() => ({
    backgroundImage: `linear-gradient(45deg, #026359, #0AA689)`,
    color: "white",
    boxShadow: "0 0 10px 1px #0D8C7F",
    "&:hover": {
      boxShadow: "0 0 10px 8px #0D8C7F", // Adjust glow on hover
    },
    textTransform: "none",
    fontSize: ".8rem",
    margin: "10px",
  }));

  //GitHub Button
  const CustomButton2 = styled(Button)(() => ({
    color: "white",
    boxShadow: "0 0 5px 1px #0AA689",
    "&:hover": {
      boxShadow: "0 0 10px 8px #0AA689", // Adjust glow on hover
    },
    textTransform: "none",
    fontSize: ".8rem",
    margin: "10px",
  }));

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid item xs={12} md={6}>
      <Box
        sx={{
          maxWidth: 700,
          border: "1px solid #026359",
          padding: "15px",
          borderRadius: "15px",
          height: isMobile ? "26rem" : "24rem",
        }}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems= {`${isMobile ? "center" : "flex-start"}`}
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
        <div>
          {
            hasDemo ? (
            <a href={pageLink} target="_blank" rel="noreferrer">
              <CustomButton size="small" >Demo</CustomButton>
            </a>
            ) : 
            <a href={pageLink} target="_blank" rel="noreferrer">
              <CustomButton size="small" >Demo TBA</CustomButton>
            </a>
          }
          
          {/* And for now, these will just link to my general GitHub page */}
          <a
            href="https://www.github.com/ep3824"
            target="_blank"
            rel="noreferrer"
          >
            <CustomButton2 size="small">GitHub</CustomButton2>
          </a>
        </div>
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
