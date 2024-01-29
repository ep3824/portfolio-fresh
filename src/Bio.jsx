import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import trendLogo from "/images/trendLogoWhite.webp";
import grinLogo from "/images/grinLogoTransparent.webp";
import tPayLogo from "/images/tPay.webp";

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
          <Typography variant="h4" pb={4}>
            Hi, I&apos;m Ethan! I am a web developer with cybersecurity
            experience.
          </Typography>
          <Typography variant="body1" pb={4} textAlign="left">
            I create websites that help organizations address business
            challenges and meet their needs. My expertise ranges from crafting
            intuitive website navigation and layouts to handling aspects such as
            web hosting and securing applications on cloud platforms.
          </Typography>
          <Typography variant="body1" pb={4} textAlign="left">
            My broad experience and skillset includes full stack web apps, and
            the main languages in my tech stack are JavaScript, React, and of
            course HTML/CSS. I&apos;m a lifelong learner and love to bake, cook,
            and find new plants to nurture. Ask me about my fig tree!
          </Typography>
          <Typography variant="h5" pb={5}>
            Here are some of the companies I&apos;ve worked with:
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
        </Grid>
      </Grid>
    </div>
  );
}
