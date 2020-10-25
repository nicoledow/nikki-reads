import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import Theme from '../Theme/Theme';

function LoginForm(props) {

  const handleSignup = e => {
    e.preventDefault();

    const inputs = [...e.target.querySelectorAll('input')];

    const formData = {}
    inputs.forEach(input => {
      if (input.type !== 'submit') {
        formData[input.name] = input.value;
      }
    });

    if (validateInputs(formData)) {
      createNewUser(formData);
    } else {
      console.log('failed validations');
    }
  };

  const validateInputs = data => {
    if (data.password !== data.confirmPassword) {
      alert('Passwords do not match!');
      return false;
    } else if (!Object.values(data).every(value => value !== '')) {
      alert('All fields are required!');
      return false;
    } else {
      return true;
    }
  }

  const createNewUser = data => {
    fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(resp => resp.json())
      .then(result => {
        if (result.status === 201) {
          localStorage.currentUserId = result.userId;
          window.location.href = '/';
        } else if (result.status === 400) {
          alert('A user with this email is already registered!');
        } else {
          alert('Your account could not be created. Please verify your information and try again later.');
        }
      })
      .catch(err => {
        console.log('err', err);
        alert('We\'re sorry, your account could not be created. Please try again later.');
      })
  }

  const useStyles = makeStyles({
    form: {
      border: `1px solid ${Theme.palette.info.main}`,
      width: '66%',
      padding: '1.5rem',
      margin: 'auto',
      borderRadius: '1.5rem',
      backgroundColor: Theme.palette.tertiary.main
    },
    input: {
      width: '66%',
      height: '2rem',
      margin: '0.75rem',
      border: `1.5px solid ${Theme.palette.info.main}`,
      borderRadius: '0.25rem',
      textAlign: 'center'
    }
  });
  const classes = useStyles();

  if (props.form === 'signup') {
    return (
      <Container style={{ textAlign: 'center' }}>
        <form onSubmit={handleSignup} className={classes.form}>
          <input type="text" name="name" placeholder="Name" className={classes.input} /><br />
          <input type="text" name="email" placeholder="Email address" className={classes.input} /><br />
          <input type="password" name="password" placeholder="Password" className={classes.input} /><br />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" className={classes.input} /><br />
          <input type="submit" value="Sign Up" style={{ ...Theme.buttons.menu, padding: '0.75rem' }} />
        </form>
      </Container>
    )
  }

}

export default LoginForm;