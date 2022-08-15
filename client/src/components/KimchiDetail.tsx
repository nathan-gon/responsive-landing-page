import styled from "@emotion/styled";
import { createTheme, Grid, useMediaQuery } from "@mui/material";
import kimchi from '../images/Kimchi.jpg';
import KimchiText from "./KimchiText";

const StyledImge = styled.img({
  '&:hover': {
    transform: 'scale(1.1,1.1)',
    opacity: '1.3'

  },
  transition: '.7s',
  height: '100%',
  width: '100%'
});

export default function KimchiDetail () {
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
                sx={{ ...flexStyle, backgroundColor: '#EBE2DF' }}
                item xs={12} sm={6} >
                <KimchiText />
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
                <StyledImge src={kimchi} alt='kimchi' />

            </Grid>

        </Grid >
  );
}
