import React from 'react';
import { Container, Typography } from '@material-ui/core';

function LoginForm(props) {
  console.log(props);
  const handleSignup = () => {
    // e.preventDefault();
    console.log('handle signup fn');
  }
  
  if(props.form === 'signup') {
    return (
      <Container>
        <form onSubmit={handleSignup}>
          <input type="text" name="email" placeholder="Email address"/>
          <input type="submit" value="Sign Up"/>
        </form>
      </Container>
    )
  }
}

export default LoginForm;