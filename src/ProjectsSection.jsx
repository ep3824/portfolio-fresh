import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import ProjectCard from "./ProjectCard.jsx";

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
        <ProjectCard image={`https://picsum.photos/id/237/536/354`} title={'Project 1'} description={'description'}/>
        <ProjectCard image={`https://picsum.photos/id/237/536/354`} title={'Project 2'} description={'description'}/>
        <ProjectCard image={`https://picsum.photos/id/237/536/354`} title={'Project 3'} description={'description'}/>
      </Grid>
    </Grid>
  );
}
