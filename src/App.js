import { Fragment } from "react";
import GlobalStyle from './styles/GlobalStyle'
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Components
import Navbar from './components/Navbar';

//pages
import Home from './pages/Home';

const theme = createTheme();

theme.typography.h2 = {
  fontSize: '1.2rem',
  letterSpacing: '4px',
  '@media (max-width:900px)': {
    letterSpacing: 0,
    fontSize: '40px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '50px',
  },
};

theme.typography.h3 = {
  letterSpacing: '4px',
  '@media (max-width:900px)': {
    letterSpacing: '4px',
    fontSize: '30px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '48px',
  },
};

export default function App() {
  return (
      <Fragment>
        <ThemeProvider theme={theme}>
          <GlobalStyle/>
          <Navbar/>
          <Home/>
        </ThemeProvider>
      </Fragment>
  )
}