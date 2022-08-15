import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

export default function Footer () {
  const theme = useTheme();
  const downSm = useMediaQuery(theme.breakpoints.down('sm'));

  const styles = {
    fontSize: downSm ? '30px' : '70px',
    textAlign: 'center',
    maxHeight: '90px',
    fontWeight: '1000',
    textTransform: 'uppercase'
  };

  return (

        <Grid display='flex'
            alignItems='center'
            justifyContent='center'
            height={downSm ? '500px' : '650px'}
            container
            sx={{ backgroundColor: 'white', color: 'black' }}
        >
            <Grid
                data-aos-delay='100' data-aos='fade-up'
                item xs={12}>
                <Typography
                    sx={styles}
                >
                    Have a own
                </Typography>
                <Grid data-aos-delay='200' data-aos='fade-up'
                    item xs={12}>
                    <Typography
                        sx={styles}
                    >
                        recipes?
                    </Typography>
                </Grid>
                <Grid data-aos-delay='300' data-aos='fade-up'
                    item xs={12}>
                    <Typography
                        sx={styles}
                    >
                        Share and get
                    </Typography>
                </Grid>
                <Grid data-aos-delay='400' data-aos='fade-up'
                    item xs={12}>

                    <Typography
                        sx={styles}
                        color='primary'
                        textAlign='justify'
                    >
                        Reward!
                    </Typography>
                </Grid>
            </Grid>
        </Grid>

  );
}
