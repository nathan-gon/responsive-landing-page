import { Grid } from "@mui/material";
import bibimbab from '../images/bibimbab.jpg'




export default function BibimbabDetail() {


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
                    backgroundImage: `url(${bibimbab})`,
                    backgroundSize: 'cover'
                }}
            >
            </Grid>
        </Grid >
    )


}