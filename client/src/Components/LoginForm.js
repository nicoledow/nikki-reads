import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import Theme from "../Theme/Theme";

const LoginForm = () => {
  const handleSignup = (e) => {
    e.preventDefault();

    const inputs = [...e.target.querySelectorAll("input")];

    const formData = {};
    inputs.forEach((input) => {
      if (input.type !== "submit") {
        formData[input.name] = input.value;
      }
    });

    if (validateInputs(formData)) {
      createNewUser(formData);
    } else {
      console.log("failed validations");
    }
  };

  const validateInputs = (data) => {
    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match!");
      return false;
    } else if (!Object.values(data).every((value) => value !== "")) {
      alert("All fields are required!");
      return false;
    } else {
      return true;
    }
  };

  const createNewUser = (data) => {
    fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((result) => {
        if (result.status === 201) {
          // localStorage.currentUserId = result.userId;
          logInUser(result.userId);
          window.location.href = "/";
        } else if (result.status === 400) {
          alert("A user with this email is already registered!");
        } else {
          alert(
            "Your account could not be created. Please verify your information and try again later."
          );
        }
      })
      .catch((err) => {
        console.log("err", err);
        alert(
          "We're sorry, your account could not be created. Please try again later."
        );
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const inputs = [...e.target.querySelectorAll("input")];
    const emptyInput = inputs.find((input) => input.value === "");
    if (emptyInput) {
      emptyInput.style = "border: 2.5px solid red";
      emptyInput.addEventListener("change", () => {
        emptyInput.style = "";
      });
      return;
    }

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
        console.log("log in result", result);
        if (result.userValidated) {
          logInUser(result.userId);
          // localStorage.currentUserId = result.userId;
          window.location.href = "/";
        } else {
          alert("Password incorrect.");
        }
      })
      .catch((err) => {
        console.log("log in err", err);
        alert(
          "We're sorry, your request cannot be processed right now. Please try again later."
        );
      });
  };

  const logInUser = (userId) => {
    localStorage.currentUserId = userId;
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

  if (window.location.href.split("/").pop() === "signup") {
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
          <input
            type="submit"
            value="Sign Up"
            style={{ ...Theme.buttons.menu, padding: "0.75rem" }}
          />
        </form>
      </Container>
    );
  } else {
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
  }
};

export default LoginForm;
