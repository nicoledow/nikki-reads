import React from 'react';
import { useState } from "react";
import { Container, Typography } from '@material-ui/core';

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
      console.log('can be submitted');
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

  if (props.form === 'signup') {
    return (
      <Container>
        <form onSubmit={handleSignup}>
          <input type="text" name="name" placeholder="Name" /><br />
          <input type="text" name="email" placeholder="Email address" /><br />
          <input type="password" name="password" placeholder="Password" /><br />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" /><br />
          <input type="submit" value="Sign Up" />
        </form>
      </Container>
    )
  }
}

export default LoginForm;