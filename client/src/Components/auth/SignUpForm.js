import React, { useState } from "react";
import {
  Checkbox,
  FormGroup,
  makeStyles,
  Container,
  FormControl,
  FormControlLabel,
} from "@material-ui/core";

import Theme from "../../Theme/Theme";
import logInUser from "../../actions/logInUser";

const SignUpForm = (props) => {
  const [isAuthor, setAsAuthor] = useState(false);

  const handleUserTypeChange = event => {
    const isSetAsAuthor = event.target.name === "author";
    setAsAuthor(isSetAsAuthor);
  };

  const validateUserInput = (userData) => {
    function markFieldMissing(key) {
      const input = document.querySelector(`input[name="${key}"]`);
      input.className = classes.error;
    }

    for (const [key, value] of Object.entries(userData)) {
      if (!value || value === "") {
        markFieldMissing(key);
        return false;
      }
    }

    if (userData.password !== userData.confirmPassword) {
      alert("Passwords do not match! Please verify and try again.");
      return false;
    }

    return true;
  };

  const handleSignup = (e) => {
    e.preventDefault();

    const userData = {
      name: e.target.querySelector('input[name="name"]').value,
      email: e.target.querySelector('input[name="email"]').value,
      password: e.target.querySelector('input[name="password"]').value,
      confirmPassword: e.target.querySelector('input[name="confirmPassword"]')
        .value,
      isAuthor: e.target.querySelector('input[name="author"]').checked,
    };

    if (!validateUserInput(userData)) {
      return;
    }

    fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((resp) => resp.json())
      .then((result) => {
        if (result.status === 201) {
          logInUser(result);
          props.history.push("/lists");
        } else {
          const messageText = result.message;
          alert(messageText);
          return;
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
    error: {
      width: "66%",
      height: "2rem",
      margin: "0.75rem",
      border: "1px solid red",
      borderRadius: "0.25rem",
      textAlign: "center",
    },
  });
  const classes = useStyles();

  return (
    <Container style={{ textAlign: "center" }}>
      <form onSubmit={handleSignup} className={classes.form}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className={classes.input}
        />
        <br />
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
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          className={classes.input}
        />
        <br />
        <div style={{ textAlign: "left" }}>
          <p>I am a...</p>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={!isAuthor} onChange={e => handleUserTypeChange(e)} name="reader" />}
              label="Reader"
            />
            <FormControlLabel
              control={<Checkbox checked={isAuthor} onChange={e => handleUserTypeChange(e)} name="author" />}
              label="Author"
            />
          </FormGroup>
        </div>
        <input
          type="submit"
          value="Sign Up"
          style={{ ...Theme.buttons.menu, padding: "0.75rem" }}
        />
      </form>
      <div id="userType" style={{ textAlign: "center" }}>
        Already have an account?
        <a href="/login" style={Theme.links.plainText}>
          Log in here.
        </a>
      </div>
    </Container>
  );
};

export default SignUpForm;
