import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

export default function Resume() {
    return (
        <Box padding="1rem">
            <Grid style={{ width: '100%', height: '100vh', overflow: 'auto' }}>
                <Typography variant="h2">
                    <div id="Resume">Resume</div>
                </Typography>
                <iframe
                    src="../EthanParentJan9Resume.pdf"
                    frameBorder="0"
                    scrolling="auto"
                    style={{ width: '100%', height: '100%', border: 'none' }}
                ></iframe>

            </Grid>
        </Box>
    )
}