import { Fragment } from 'react';
import './App.css';
import Stack from './pages/Stack';
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';
import { ModalButton } from './components/ModalButton ';
import { Container, createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import NavBar from './components/NavBar';


const theme = createTheme({
  palette: {
    primary: {
      main: '#212121'
    },
    secondary: {
      main: '#ffc200'
    },
    text: {
      primary: '#5b5b5b',
      secondary: '#212121'
    },
  },
  typography: {
    fontFamily: [
      'Ubuntu',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  overrides: {
    MuiToolbar: {
      root: {
        backgroundColor: '#fff',
        color: '#212121'
      }
    },
    MuiButton: {
      contained: {
        backgroundColor: '#474559',
        borderRadius: '40px',
        color: '#fff',
        fontWeight: 'bold',
        paddingTop: '10px',
        paddingBottom: '10px',
        '&:hover': {
          backgroundColor: '#ffc200'
        }
      },
    },
  },
})

function App() {
  return (
      <ThemeProvider theme={ theme }>
        <CssBaseline />
        <Container maxWidth="lg">
          <NavBar />
          <AboutMe /> 
          <Projects />
          <Stack />
          <ModalButton />
        </Container>
      </ThemeProvider> 
  );
}

export default App;
