import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { makeStyles, Grid, Container, Button } from "@material-ui/core";
import { logInUser } from "../actions/logInUser";
import FormTabs from './FormTabs';

const LoginForm = (props) => {
  let [selectedForm, selectForm] = useState("login");

  const useStyles = makeStyles({
    gridItem: {
    }
  });
  const classes = useStyles();

  const switchForm = event => {
    const selectedTab = event.target.parentElement.id;
    selectForm(prevForm => {
      return selectedTab;
    });
  }

  const signUpUser = event => {
    event.preventDefault();

    const form = document.getElementById('signupForm');
    const userData = {
      name: form.querySelector('input[name="name"]').value,
      email: form.querySelector('input[name="email"]').value,
      password: form.querySelector('input[name="password"]').value,
      confirmPassword: form.querySelector('input[name="confirmPassword"]').value
    };

    if (userData.password !== userData.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    const url = `${process.env.REACT_APP_BACKEND_BASE_URL}/users`;
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json'},
      body: JSON.stringify(userData)
    })
    .then(resp => resp.json())
    .then(data => {
      if (data.message !== 'User created.') {
        alert(`${data.message}`);
      } else {
        props.logInUser(data.userId);
      }
    })
    .catch(err => {
      alert('We\'re sorry, an error occurred. Please try again.');
      console.log('err', err)
    })
  };

  if (selectedForm === 'login') {
    return (
      <div>
        <FormTabs switchForm={switchForm}/>
        <p>login</p>
      </div>
    )
  } else {
    return (
      <div>
        <FormTabs/>
        <form onSubmit={e => signUpUser(e)} id="signupForm">
          <input type="text" name="name" placeholder="Name"/> <br/>
          <input type="text" name="email" placeholder="Email address"/> <br/>
          <input type="password" name="password" placeholder="Password"/> <br/>
          <input type="password" name="confirmPassword" placeholder="Confirm Password"/> <br/>
          <input type="submit" value="Sign Up"/>
        </form>
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    logInUser: userId => dispatch(logInUser),
  };
};

export default connect(null, mapDispatchToProps)(LoginForm);
