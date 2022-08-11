import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import aos from 'aos'
import "aos/dist/aos.css";
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { useEffect } from "react";



export default function Main() {

    const theme = useTheme();
    const downSm = useMediaQuery(theme.breakpoints.down('sm'));



    useEffect(() => {
        aos.init({
            duration: 500
        })
    })

    return (

        <Grid display='flex'
            alignItems='center'
            justifyContent='center'
            height={downSm ? '500px' : '700px'}
            container
            sx={{ backgroundColor: '#232931', color: 'white' }}
        >
            <Grid
                data-aos-delay='100' data-aos='fade-up'
                item xs={12}>
                <Typography
                    fontSize={downSm ? '30px' : '90px'}
                    textAlign='center'
                    fontWeight={700}
                    textTransform='uppercase'
                >
                    Share your
                </Typography>
                <Grid data-aos-delay='200' data-aos='fade-up'
                    item xs={12}>
                    <Typography
                        fontSize={downSm ? '30px' : '90px'}
                        textAlign='center'
                        fontWeight={700}
                        textTransform='uppercase'>
                        Own recipes
                    </Typography>
                </Grid>
                <Grid data-aos-delay='300' data-aos='fade-up'
                    item xs={12}>
                    <Typography
                        fontSize={downSm ? '30px' : '90px'}
                        textAlign='center'
                        fontWeight={700}
                        textTransform='uppercase'>
                        of
                    </Typography>
                </Grid>
                <Grid data-aos-delay='400' data-aos='fade-up'
                    item xs={12}>
                    <Typography
                        fontSize={downSm ? '30px' : '90px'}
                        textAlign='center'
                        fontWeight={700}
                        textTransform='uppercase'
                        color='crimson'
                    >
                        korean food  <LocalFireDepartmentIcon fontSize='inherit' />
                    </Typography>

                </Grid>
            </Grid>
        </Grid>


    )

}