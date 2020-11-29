import React from "react";
import { Container, makeStyles } from "@material-ui/core";

import Theme from "../../Theme/Theme";
import loginUser from '../../actions/logInUser';

const LoginForm = props => {

  const handleLogin = (e) => {
    e.preventDefault();
  
    const userData = {
      email: e.target.querySelector('input[name="email"]').value,
      password: e.target.querySelector('input[name="password"]').value,
    };

    fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((resp) => resp.json())
      .then((result) => {
        if (result.userValidated) {
          loginUser(result);
          props.history.push('/explore');
        } else {
          alert("Email or password is incorrect.");
        }
      })
      .catch((err) => {
        console.log("log in err", err);
        alert(
          "We're sorry, your request cannot be processed right now. Please try again later."
        );
      });
  };


  const useStyles = makeStyles({
    form: {
      border: `1px solid ${Theme.palette.info.main}`,
      width: "66%",
      padding: "1.5rem",
      margin: "auto",
      borderRadius: "1.5rem",
      backgroundColor: Theme.palette.tertiary.secondary,
    },
    input: {
      width: "66%",
      height: "2rem",
      margin: "0.75rem",
      border: `1.5px solid ${Theme.palette.info.main}`,
      borderRadius: "0.25rem",
      textAlign: "center",
    },
  });
  const classes = useStyles();

  return (
    <Container style={{ textAlign: "center" }}>
      <form onSubmit={handleLogin} className={classes.form}>
        <input
          type="text"
          name="email"
          placeholder="Email address"
          className={classes.input}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className={classes.input}
        />
        <br />
        <input
          type="submit"
          value="Log In"
          style={{ ...Theme.buttons.menu, padding: "0.75rem" }}
        />
      </form>
      <div style={{ textAlign: "center" }}>
        New user?
        <a href="/signup" style={Theme.links.plainText}>
          Sign up here.
        </a>
      </div>
    </Container>
  );
};

export default LoginForm;
