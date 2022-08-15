import { createTheme, ThemeProvider } from '@mui/material';
import BbqDetail from './components/BbqDetail';
import BibimbabDetail from './components/BibimbabDetail';
import Footer from './components/Footer';
import KimchiDetail from './components/KimchiDetail';
import Main from './components/Main';

function App () {
  const theme = createTheme({

  });

  return (
    <ThemeProvider theme={theme}>
      <Main />
      <KimchiDetail />
      <BibimbabDetail />
      <BbqDetail />
      <Footer />
    </ThemeProvider>

  );
}

export default App;
