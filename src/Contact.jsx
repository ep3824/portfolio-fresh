import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Contact() {
  return (
    <div id="Contact">
      <Box>
        <Grid padding="2rem">
          <Typography variant="h2">Contact</Typography>
          <Grid
            container
            columnSpacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
            padding="4rem"
          >
            <Grid item>
              <EmailIcon />
              <div>
                <a href="ma&#105;lto&#58;%65&#116;&#37;68an&#46;&#112;&#97;&#114;ent&#37;31&#37;40g&#109;&#97;il&#46;c%&#54;F%6D">
                  eth&#97;n&#46;p&#97;re&#110;t&#49;&#64;&#103;mail&#46;com
                </a>
              </div>
            </Grid>
            <Grid item>
              <LinkedInIcon />
              <div>
                <a href="https://www.linkedin.com/in/ethanparent/">
                  linkedin.com/in/ethanparent
                </a>
              </div>
            </Grid>
            <Grid item>
              <GitHubIcon />
              <div>
                <a href="github.com/ep3824>">github.com/ep3824</a>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
