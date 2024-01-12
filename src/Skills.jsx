import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

export default function Skills() {
  return (
    <Grid >
     <Grid
        container
        spacing={3}
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{ maxWidth: 700, margin: "0 auto" }}
      >
        <Grid item xs={12}>
          <Typography variant="h3" pb={4}  textAlign="left">
            Skills
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
