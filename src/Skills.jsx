import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SkillBar from "./SkillBar.jsx";
import Bio from "./Bio.jsx";

export default function Skills() {
  return (
    <div id="Skills">
      <Grid
        container
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{ maxWidth: 1400, margin: "0 auto" }}
        pb={30}
      >
        <Grid item xs={12} md={6}>
          <Typography variant="h3" pb={4} textAlign="left">
            Skills
          </Typography>
          <SkillBar skill={"JavaScript"} value={75} />
          <SkillBar skill={"React"} value={65} />
          <SkillBar skill={"AWS"} value={50} />
          <SkillBar skill={"Express"} value={40} />
          <SkillBar skill={"MongoDB"} value={30} />
          <SkillBar skill={"HTML & CSS"} value={40} />
          <SkillBar skill={"Material UI"} value={30} />
          <SkillBar skill={"Docker"} value={30} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Bio />
        </Grid>
      </Grid>
    </div>
  );
}
