import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import SkillBar from "./SkillBar.jsx";

export default function Skills() {
  return (
    <Grid>
      <Grid
        container
        spacing={3}
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{ maxWidth: 700, margin: "0 auto" }}
      >
        <Grid item xs={12}>
          <Typography variant="h3" pb={4} textAlign="left">
            Skills
          </Typography>
          <SkillBar skill={"JavaScript"} value={50} />
          <SkillBar skill={"React"} value={50} />
          <SkillBar skill={"Node"} value={50} />
          <SkillBar skill={"Express"} value={40} />
          <SkillBar skill={"PostgreSQL"} value={10} />
          <SkillBar skill={"MongoDB"} value={30} />
          <SkillBar skill={"HTML"} value={30} />
          <SkillBar skill={"CSS"} value={30} />
          <SkillBar skill={"Material UI"} value={30} />
          <SkillBar skill={"Bootstrap"} value={20} />
          <SkillBar skill={"Git"} value={50} />
          <SkillBar skill={"GitHub"} value={50} />

        </Grid>
      </Grid>
    </Grid>
  );
}
