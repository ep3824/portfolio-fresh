import Grid from "@mui/material/Grid";
import ProjectCard from "./ProjectCard.jsx";
import Typography from "@mui/material/Typography";
import EPWebsiteSS from "/images/EPWebsiteSS.png";
import weatherPic from "/images/weatherPagePic.png";
import HOTeaser from "/images/HOTeaser.png";

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
            image={`${weatherPic}`}
            title={"Weather App"}
            description={"An elegant weather app built with React and Material UI. Uses Tomorrow.io to fetch weather data."} 
            pageLink={"/dashboard-page"}
            hasDemo={true}
          />
          <ProjectCard
            image={`${EPWebsiteSS}`}
            title={"This Website"}
            description={"Created with React & Material UI."}
            pageLink={"/"}
            hasDemo={false}
          />
          <ProjectCard
            image={`${HOTeaser}`}
            title={"React Native Game"}
            description={"A multiplayer DnD-esque experience built with React Native (Expo) and powered by WebSockets. Coming soon."}
            pageLink={"/"}
            hasDemo={false}
          />
        </Grid>
      </Grid>
    </div>
  );
}
