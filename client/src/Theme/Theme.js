import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#726da8" //dark blue gray
    },
    secondary: {
      main: "#7d8cc4" //glaucos - medium purplish-blue
    },
    tertiary: {
      main: '#a0d2db' //light blue
    },
    error: {
      main: "#bee7e8", //bright powder blue
    },
    info: {
      main: "#594157", //eggplant
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
      border: '0.2rem solid grey',
      borderRadius: '1.5rem',
      fontWeight: 300,
      color: '#594157',
      textAlign: 'center',
      height: '2rem',
      width: '75%'
    },
    menu:{
      color: '#bee7e8',
      backgroundColor: '#726da8',
      fontFamily: "Lato",
      '&hover': {
        color: '#726da8'
      }
    }
  }
});

export default theme;
