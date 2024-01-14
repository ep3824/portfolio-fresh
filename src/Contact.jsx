import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Contact() {
  return (
    <div id="Contact">
      <Grid>
        <Grid
          container
          justifyContent="space-between"
          alignItems="flex-start"
          sx={{ maxWidth: 1400, margin: "0 auto" }}
          pb={5}
        >
          <Grid item xs={12}>
            <Typography variant="h3" pb={4} textAlign={"left"}>
              Contact
            </Typography>
          </Grid>
          <Grid item>
            <EmailIcon style={{ fontSize: 60 }} />
            <div>
              <a href="ma&#105;lto&#58;%65&#116;&#37;68an&#46;&#112;&#97;&#114;ent&#37;31&#37;40g&#109;&#97;il&#46;c%&#54;F%6D">
                eth&#97;n&#46;p&#97;re&#110;t&#49;&#64;&#103;mail&#46;com
              </a>
            </div>
          </Grid>
          <Grid item>
            <LinkedInIcon style={{ fontSize: 60 }} />
            <div>
              <a href="https://www.linkedin.com/in/ethanparent/">
                linkedin.com/in/ethanparent
              </a>
            </div>
          </Grid>
          <Grid item>
            <GitHubIcon style={{ fontSize: 60 }} />
            <div>
              <a href="https://www.github.com/ep3824">github.com/ep3824</a>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
