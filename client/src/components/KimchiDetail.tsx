import { Grid, Typography } from "@mui/material";
import kimchi from '../images/Kimchi.jpg'




export default function KimchiDetail() {


    return (
        <Grid display='flex'
            alignItems='center'
            justifyContent='center'
            // height={downSm ? '500px' : '700px'}
            height='550px'
            container
        >
            <Grid item xs={6} >
            </Grid>
            <Grid item
                xs={6}
                height='inherit'
                display='flex'
                alignItems='center'
                justifyContent='center'
                sx={{
                    backgroundImage: `url(${kimchi})`,
                    backgroundSize: 'cover'
                }}
            >
                <Typography  >
                    Hello
                </Typography>

            </Grid>
        </Grid >
    )


}