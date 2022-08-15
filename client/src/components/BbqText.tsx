import { useMediaQuery, Grid, Typography, createTheme } from "@mui/material";

export default function BbqbText () {
  const theme = createTheme();
  const downSm = useMediaQuery(theme.breakpoints.down('sm'));

  const styles = {
    fontSize: downSm ? '30px' : '50px',
    textAlign: 'center',
    maxHeight: '60px',
    fontWeight: 700,
    textTransform: 'uppercase',
    color: '#EBE2DF'
  };

  return (

        <Grid
            data-aos-delay='100' data-aos='fade-up'
            item xs={12} >
            <Typography
                sx={styles}

            >
                Korean bbq
            </Typography>
            <Grid data-aos-delay='200' data-aos='fade-up'
                item xs={12}>
                <Typography
                    sx={styles}
                >
                    with soju
                </Typography>
            </Grid>
            <Grid data-aos-delay='300' data-aos='fade-up'
                item xs={12}>
                <Typography
                    sx={styles}
                >
                    have you tried?
                </Typography>
            </Grid>
        </Grid>

  );
}
