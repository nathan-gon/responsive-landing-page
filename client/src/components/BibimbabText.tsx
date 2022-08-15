import { useMediaQuery, Grid, Typography, createTheme } from "@mui/material";

export default function BibimbabText () {
  const theme = createTheme();
  const downSm = useMediaQuery(theme.breakpoints.down('sm'));

  const styles = {
    fontSize: downSm ? '30px' : '50px',
    textAlign: 'center',
    maxHeight: '60px',
    fontWeight: 700,
    textTransform: 'uppercase',
    color: 'crimson'

  };

  return (

        <Grid
            data-aos-delay='100' data-aos='fade-up'
            item xs={12} >
            <Typography
                sx={styles}
            >
                Korean Likes
            </Typography>
            <Grid data-aos-delay='200' data-aos='fade-up'
                item xs={12}>
                <Typography
                    sx={styles}
                >
                    to eat
                </Typography>
            </Grid>
            <Grid data-aos-delay='300' data-aos='fade-up'
                item xs={12}>
                <Typography
                    sx={styles}
                >
                    everything
                </Typography>

            </Grid>
            <Grid data-aos-delay='400' data-aos='fade-up'
                item xs={12}>
                <Typography
                    sx={styles}
                >
                    mixed together!
                </Typography>

            </Grid>

        </Grid>

  );
}
