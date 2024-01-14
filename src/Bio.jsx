import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import trendLogo from "../trendLogoWhite.png";
import grinLogo from "../grinLogoTransparent.png";
import tPayLogo from "../tPay.png";

export default function Bio() {
  return (
    <div id="Bio">
      <Grid
        container
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{ maxWidth: 1400, margin: "0 auto" }}
        pb={30}
      >
        <Grid item xs={12}>
          <Typography variant="h3" pb={4} textAlign="left">
            Bio
          </Typography>
          <Typography variant="h4">
            Hi, I’m Ethan! I’m a web developer with cybersecurity experience.
          </Typography>
          <Typography variant="body1" pb={4} textAlign="left">
            <p>
              In a nutshell, I create websites that help organizations address
              business challenges and meet their needs. I manage everything from
              website navigation and layout to a company’s web hosting and
              security architecture.
            </p>

            <p>
              My expertise lies within front-end web apps, and the main
              languages in my tech stack are JavaScript, React, and of course
              HTML/CSS. I’m a lifelong learner (currently taking a course on
              building AI chatbots with Python!) and love to read, run, and find
              new bubble tea shops in New York City.
            </p>
            <Typography variant="h5" pb={5}>
              Here are some of the companies I've worked with:
            </Typography>
            <Grid>
              <Grid item>
                <a href="https://www.trendmicro.com/en_us/business.html">
                  <img
                    src={trendLogo}
                    alt="Trend Micro Logo"
                    style={{
                      width: "50%",
                      height: "50%",
                    }}
                  />
                </a>
              </Grid>
              <Grid item>
                <a href="https://grin.co">
                  <img
                    src={grinLogo}
                    alt="Grin Logo"
                    style={{
                      width: "50%",
                      height: "50%",
                    }}
                  />
                </a>
              </Grid>
              <Grid item>
                <a href="https://triumphpay.com/">
                  <img
                    src={tPayLogo}
                    alt="TriumphPay Logo"
                    style={{
                      width: "50%",
                      height: "50%",
                    }}
                  />
                </a>
              </Grid>
              
            </Grid>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
