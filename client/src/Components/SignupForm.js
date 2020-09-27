import React from 'react';
import signupUser from '../actions/signupUser';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const SignupForm = (props) => {

    const useStyles = makeStyles({
        linkStyle: {
            textDecoration: 'none'
        },
        textInputStyles: {

        },
        btnStyle: {

        }
    });
    const classes = useStyles();

  const handleFormSubmit = event => {
    event.preventDefault();
    console.log('signup form submitted');
  };
  
  return(
      <div>
          <form onSubmit={e => handleFormSubmit(e)}>
              <input type="text" name="email" placeholder="Enter an email address"/><br/>
              <input type="password" name="password" placeholder="Enter Password"/><br/>
              <input type="password" name="passwordConfirm" placeholder="Confirm Password"/><br/>
              <button type="submit">Sign Up</button>
          </form>
          <Link to="/login" className={classes.linkStyle}>Already have an account?</Link>
      </div>
  )
};

const mapStateToProps = (state) => {
  return { isLoggedIn: state.isLoggedIn };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signupUser: () => dispatch(signupUser),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);