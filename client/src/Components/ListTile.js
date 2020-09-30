import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Theme from "../Theme/Theme";

export default function ListTile(props) {
  const useStyles = makeStyles({
    cardStyle: {
      border: "1px solid #20c4cc",
      margin: "1rem",
      height: "7rem",
      backgroundColor: Theme.palette.primary.main,
      borderRadius: '0.5rem'
    },
    linkStyle: {
      textDecoration: "none",
      color: Theme.palette.secondary.main,
      fontFamily: Theme.typography.h6,
    },
    btnStyle: Theme.buttons.tile
  });
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.cardStyle}>
      <button className={classes.btnStyle} color="primary">
        {props.list.list_name}
      </button>
    </Grid>
  );
}
