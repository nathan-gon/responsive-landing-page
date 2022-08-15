import { createTheme, Grid, useMediaQuery } from "@mui/material";
import styled from "@emotion/styled";
import koreanbbq from '../images/kroeanbbq.jpg';
import BbqbText from "./BbqText";

const StyledImge = styled.img({
  '&:hover': {
    transform: 'scale(1.1,1.1)',
    opacity: '1.3'

  },
  transition: '.7s',
  height: '100%',
  width: '100%'
});

export default function BbqDetail () {
  const theme = createTheme();
  const downSm = useMediaQuery(theme.breakpoints.down('sm'));

  const flexStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  return (
        <Grid
            height='550px'
            container
            sx={{ ...flexStyle, backgroundColor: '#EBE2DF', overflow: 'hidden' }}
        >
            <Grid
                height={downSm ? '275px' : 'inherit'}
                sx={{ ...flexStyle, backgroundColor: 'crimson' }}
                item xs={12} sm={6} >
                <BbqbText />
            </Grid>

            <Grid item
                xs={12} sm={6}
                height={downSm ? '275px' : 'inherit'}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden'
                }}
            >
                <StyledImge src={koreanbbq} alt='koreanbbq' />

            </Grid>

        </Grid >
  );
}
