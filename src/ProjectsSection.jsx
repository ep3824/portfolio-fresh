import { Grid } from "@mui/material";
import ProjectCard from "./ProjectCard.jsx";
import Typography from "@mui/material/Typography";
import EPWebsiteSS from "../EPWebsiteSS.png";
import dashPic from "../dashPic.png";

export default function ProjectsSection() {
  return (
    <div id="Projects">
      <Grid>
        <Grid
          container
          spacing={1}
          justifyContent="space-between"
          alignItems="flex-start"
          sx={{ width: '100%'}}
          pb={30}
        >
          <Grid item xs={12}>
            <Typography variant="h3" pb={4} textAlign={"left"}>
              Projects
            </Typography>
          </Grid>
          <ProjectCard
            image={`${dashPic}`}
            title={"Dashboard App"}
            description={"A dashboard app that displays widgets. (WIP)"} 
          />
          <ProjectCard
            image={`${EPWebsiteSS}`}
            title={"This Website"}
            description={"Created with React, Material UI, and deployed on AWS (WIP)"}
          />
          <ProjectCard
            image={`https://picsum.photos/id/237/536/354`}
            title={"Automation Scripts"}
            description={"PowerShell and Python scripts to automate tasks."}
          />
        </Grid>
      </Grid>
    </div>
  );
}
