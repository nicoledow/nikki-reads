import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#7de2d1' //middle blue green
    },
    secondary: {
      main: '#339989' //persian green
    },
    error: {
        main: '#64e9ee' //electric blue
    },
    info: {
        main: '#131515' //eerie black
    },
    black: {
        main: '#2b2c28' //jet
    },
    white: {
        main: '#fffafb' //snow
    }
  },
  typography: {
      fontFamily: ['Lustria', 'Lato'],
      h1 : {
        fontFamily: 'Lustria'
      },
      h4: {
          fontFamily: 'Lato'
      },
      h6: {
          fontFamily: 'Lato'
      }
  },
  overrides: {
    MuiButton: {
      color: '#fffafb',
      fontFamily: 'Impact'
    }
  }
});

export default theme;