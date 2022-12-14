import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import useAos from "../hook/useAos";
import { useEffect } from "react";

export default function Main () {
  const theme = useTheme();
  const downSm = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    useAos();
  });

  const styles = {
    fontSize: downSm ? '30px' : '90px',
    textAlign: 'center',
    maxHeight: '90px',
    fontWeight: 700,
    textTransform: 'uppercase'
  };

  return (

        <Grid display='flex'
            alignItems='center'
            justifyContent='center'
            height={downSm ? '500px' : '650px'}
            container
            sx={{ backgroundColor: '#232931', color: 'white' }}
        >
            <Grid
                data-aos-delay='100' data-aos='fade-up'
                item xs={12}>
                <Typography
                    sx={styles}
                >
                    Share your
                </Typography>
                <Grid data-aos-delay='200' data-aos='fade-up'
                    item xs={12}>
                    <Typography
                        sx={styles}
                    >
                        Own recipes
                    </Typography>
                </Grid>
                <Grid data-aos-delay='300' data-aos='fade-up'
                    item xs={12}>
                    <Typography
                        sx={styles}
                    >
                        of
                    </Typography>
                </Grid>
                <Grid data-aos-delay='400' data-aos='fade-up'
                    item xs={12}>
                    <Typography
                        sx={styles}
                        color='crimson'
                    >
                        korean food  <LocalFireDepartmentIcon fontSize='inherit' />
                    </Typography>
                </Grid>
            </Grid>
        </Grid>

  );
}
