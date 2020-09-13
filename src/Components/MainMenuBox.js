import React, { useState, useEffect } from "react";
import { Typography, Slide } from "@material-ui/core";
import { Link } from 'react-router-dom';

export default function MainMenuBox(props) {
  const styles = {
    border: "1px solid blue;",
    padding: "2rem;",
  };

  const linkStyles = {
      textDecoration: 'none'
  };
  
  return (
    <div style={styles}>
      <Typography align="center" variant="h3">
        <Link to={props.link} style={linkStyles}>
            {props.title}
        </Link>
      </Typography>
    </div>
  );
}
