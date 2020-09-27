import React from 'react';
import { useState } from 'react';
import signupUser from '../actions/signupUser';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const SignupForm = (props) => {
    let [email, updateEmail] = useState(null);
    let [password, updatePassword] = useState(null);
    let [passwordConfirm, updatePasswordConfirm] = useState(null);
    let [name, updateName] = useState(null);


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
    const inputs = [...event.target.querySelectorAll('input')];

    let data = {};
    inputs.forEach(input => {
        data[input.name] = input.value;
    });

    signupUser(data)
  };

  const updateFormData = (event) => {
    const newValue = event.target.value;
    const field = event.target.name;

    switch(field) {
        case 'email':
            updateEmail(prevEmail => {
                return newValue;
            });
            break;
        case 'password':
            updatePassword(prevPassword => {
                return newValue;
            });
            break;
        case 'passwordConfirm':
            updatePasswordConfirm(prevPasswordConfirm => {
                return newValue;
            });
            break;
        case 'name':
            updateName(prevName => {
                return newValue;
            });
            break;
        default:
            return;
    }
  };
  
  return(
      <div>
          <form onSubmit={e => handleFormSubmit(e)}>
              <input type="text" name="email" placeholder="Enter an email address" onChange={e => updateFormData(e)}/><br/>
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