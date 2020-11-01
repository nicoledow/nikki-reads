import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#6d696a" //dim gray
    },
    secondary: {
      main: "#a2a7a5" //quick silver
    },
    tertiary: {
      main: '#dae2df', //gainsboro - light green-gray,
      secondary: "#e2dadb" //gainsboro - mauvey-pink
    },
    error: {
      main: "#db1634", 
    },
    info: {
      main: "#594157", //eggplant
    },
    black: {
      main: "#2b2c28", //jet
    },
    white: {
      main: "#ffffff", //white
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
  },
  links: {
    plainText: {
      textDecoration: 'none',
      color: '#594157',
      margin: '1rem'
    }
  }
});

export default theme;
