import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Contact() {

    const emailScript = `
    document.write('<a href="mailto:' + String.fromCharCode(109, 97, 105, 108, 116, 111, 58, 104, 97, 110, 46, 100, 105, 103, 105, 116, 97, 108, 105, 111, 64, 101, 120, 97, 109, 112, 108, 101, 46, 99, 111, 109) + '">h&#105;l&#116;&#111;&#64;&#101;&#120;a&#109;p&#108;&#101;&#46;c&#111;m</a>');
  `;

    return (
        <div id="Contact">
            <Box>
                <Grid padding="2rem">
                    <Typography variant="h2" >
                        Contact
                    </Typography>
                    <Grid container columnSpacing={2} direction="row" justifyContent="center" alignItems="center" padding='4rem'>
                        <Grid item>
                            <EmailIcon />
                            <div>
                                <a href='ma&#105;lto&#58;%65&#116;&#37;68an&#46;&#112;&#97;&#114;ent&#37;31&#37;40g&#109;&#97;il&#46;c%&#54;F%6D'>eth&#97;n&#46;p&#97;re&#110;t&#49;&#64;&#103;mail&#46;com</a>
                            </div>
                        </Grid>
                        <Grid item>
                            <LinkedInIcon />
                            <div>
                                <a href="https://www.linkedin.com/in/ethanparent/">linkedin.com/in/ethanparent</a>
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
    )
}