import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import SkillBar from "./SkillBar.jsx";

export default function Skills() {
  return (
    <div id="Skills">
    <Grid>
      <Grid
        container
        spacing={3}
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{ maxWidth: 700, margin: "0 auto" }}
        pb={30}
      >
        <Grid item xs={12}>
          <Typography variant="h3" pb={4} textAlign="left">
            Skills
          </Typography>
          <SkillBar skill={"JavaScript"} value={55} />
          <SkillBar skill={"React"} value={55} />
          <SkillBar skill={"AWS"} value={50} />
          <SkillBar skill={"Express"} value={40} />
          <SkillBar skill={"MongoDB"} value={30} />
          <SkillBar skill={"HTML & CSS"} value={40} />
          <SkillBar skill={"Material UI"} value={30} />
          <SkillBar skill={"Docker"} value={30} />

        </Grid>
      </Grid>
    </Grid>
    </div>
  );
}
