import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";

export default function TrafficCount() {
  return (
    <Box>
      <Grid>
        <Typography variant="h4" component="div" gutterBottom>
          Traffic Count
        </Typography>
      </Grid>
    </Box>
  );
}
