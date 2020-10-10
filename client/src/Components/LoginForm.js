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

  const logInUser = event => {
    event.preventDefault();
    console.log('log in user');

    const form = document.getElementById('loginForm');
    const userData = {
      email: form.querySelector('input[name="email"]').value,
      password: form.querySelector('input[name="password"]').value
    };

    if (!userData.email.includes('@') || !userData.email.includes('.')) {
      alert('Please enter a valid email.');
      return;
    } else if (userData.password.length <= 1) {
      alert('Pleaes enter a password to log in.');
      return;
    }

    const url = `${process.env.REACT_APP_BACKEND_BASE_URL}/login`;
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    })
    .then(resp => resp.json())
    .then(result => {
      if (!result.userValidated) {
        alert(result.message);
        return;
      }
      console.log(result);
      localStorage.currentUserId = result.userId;
      localStorage.webToken = result.token;
      window.location.href = '/';
    })
    .catch(err => {
      alert('We\'re sorry, an error occurred. Please try again.');
      console.log('err', err);
    })
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
        localStorage.currentUserId = data.userId;
        localStorage.isAuth = true;
        window.location.href = '/';
      }
    })
    .catch(err => {
      alert('We\'re sorry, an error occurred. Please try again.');
      console.log('err', err);
    })
  };

  if (selectedForm === 'login') {
    return (
      <div>
        <FormTabs switchForm={switchForm}/>
        <form onSubmit={logInUser} id="loginForm">
          <input type="text" name="email" placeholder="Email address"/> <br/>
          <input type="password" name="password" placeholder="Password"/> <br/>
          <input type="submit" value="Log In"/>
        </form>
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
