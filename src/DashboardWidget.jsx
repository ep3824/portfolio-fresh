import { Grid, Box, Typography, CardMedia } from "@mui/material";



export default function DashboardWidget() {
  return (
    <Grid item xs={12} md={6} >
      <Box
        sx={{
          maxWidth: 700,
          border: "1px solid #7a72d8",
          padding: "15px",
          borderRadius: "15px",
          height: "24rem",
          backgroundColor: "rgb(50, 126, 176, .3)",
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textAlign={"left"}
          pt={2}
        >
          title
        </Typography>
        <Typography
          variant="body1"
          color="#9299ab"
          textAlign={"left"}
          mb="20px"
          pb={2}
        >
          description
        </Typography>
        {/* For now, these projects will all just link to the same Projects Page,
        Eventually they will each get their own page */}
        
      </Box>
    </Grid>
  );
}
