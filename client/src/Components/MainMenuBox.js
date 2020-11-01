import React from "react";
import { Typography, Slide } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function MainMenuBox(props) {
  const styles = {
    textDecoration: 'none'
  };

  return (
    <div style={styles}>
      <Link to={props.link} style={styles}>
        <Typography align="center" variant="h3" color="secondary">
          {props.title}
        </Typography>
      </Link>
    </div>
  );
}
