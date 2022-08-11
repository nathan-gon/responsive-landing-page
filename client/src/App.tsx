import { createTheme, ThemeProvider } from '@mui/material';
import BbqDetail from './components/BbqDetail';
import BibimbabDetail from './components/BibimbabDetail';
import KimchiDetail from './components/KimchiDetail';
import Main from './components/Main';

function App() {

  const theme = createTheme({

  })

  return (
    <ThemeProvider theme={theme}>
      <Main />
      <KimchiDetail />
      <BibimbabDetail />
      <BbqDetail />
    </ThemeProvider>

  );
}

export default App;
