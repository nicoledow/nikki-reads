import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { logInUser } from "../actions/logInUser";

const LoginForm = (props) => {

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
    console.log('login form submitted');
  };
  console.log('classes', classes);
  return(
      <div>
          <form onSubmit={e => handleFormSubmit(e)}>
              <input type="text" name="email" placeholder="Enter an email address"/><br/>
              <input type="password" name="password" placeholder="Enter Password"/><br/>
              <button type="submit">Log In</button>
          </form>
          <Link to="/signup" className={classes.linkStyle}>New? Sign up here.</Link>
      </div>
  )
};

const mapStateToProps = (state) => {
  return { isLoggedIn: state.isLoggedIn };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logInUser: () => dispatch(logInUser),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
