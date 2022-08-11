import { Grid } from "@mui/material";
import koreanbbq from '../images/kroeanbbq.jpg'




export default function BbqDetail() {


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
                sx={{
                    backgroundImage: `url(${koreanbbq})`,
                    backgroundSize: 'cover'
                }}
            >
            </Grid>
        </Grid >
    )


}