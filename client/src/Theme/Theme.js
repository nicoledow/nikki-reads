import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#7de2d1", //middle blue green
    },
    secondary: {
      main: "#339989", //persian green
    },
    error: {
      main: "#64e9ee", //electric blue
    },
    info: {
      main: "#131515", //eerie black
    },
    black: {
      main: "#2b2c28", //jet
    },
    white: {
      main: "#fffafb", //snow
    },
  },
  typography: {
    fontFamily: ["Lustria", "Lato"],
    h1: {
      fontFamily: "Lustria",
    },
    h4: {
      fontFamily: "Lato",
    },
    h6: {
      fontFamily: "Lato",
    },
    button: {
      fontFamily: "Lustria",
    },
  },
  buttons: {
    tile: {
      backgroundColor: '#fff',
      border: '0.2rem solid black',
      borderRadius: '2rem',
      fontWeight: 300,
      color: '#339989',
      textAlign: 'center',
      height: '2rem',
      hover: {
        border: '1px solid white'
      }
    }
  }
});

export default theme;
