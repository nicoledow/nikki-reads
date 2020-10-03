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

  if (selectedForm === 'login') {
    return (
      <div>
        <FormTabs/>
        <p>login</p>
      </div>
    )
  } else {
    return (
      <div>
        <FormTabs/>
        <p>Sign up</p>
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    logInUser: () => dispatch(logInUser),
  };
};

export default connect(null, mapDispatchToProps)(LoginForm);
