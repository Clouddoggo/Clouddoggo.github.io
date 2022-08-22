import './App.css';
import React from 'react';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material';
import Karla from './fonts/Karla-VariableFont_wght.ttf';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Projects from './components/Projects';

const theme = createTheme({
  palette: {
    primary: {
      main: '#E5D8FC',
    },
    secondary: {
      main: '#9357FF',
    },
  },
  typography: {
    fontFamily: 'Karla, Jost',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Karla';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Karla'), local('Karla-Regular'), url(${Karla}) format('ttf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Stack spacing={2}>
          <Banner />
          <Projects />
          <Footer />
        </Stack>
      </div>
    </ThemeProvider>
  );
}

export default App;
