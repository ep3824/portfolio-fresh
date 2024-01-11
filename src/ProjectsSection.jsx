import { Grid } from "@mui/material";
import ProjectCard from "./ProjectCard.jsx";
import Typography from "@mui/material/Typography";

export default function ProjectsSection() {

  

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
          <Typography variant="h3" pb={4}  textAlign={"left"}>
            Projects
          </Typography>
        </Grid>
        <ProjectCard image={`https://picsum.photos/id/237/536/354`} title={'Project 1'} description={'description'}/>
        <ProjectCard image={`https://picsum.photos/id/237/536/354`} title={'Project 2'} description={'description'}/>
        <ProjectCard image={`https://picsum.photos/id/237/536/354`} title={'Project 3'} description={'description'}/>
      </Grid>
    </Grid>
  );
}
