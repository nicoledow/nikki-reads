import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Theme from "../Theme/Theme";
import { Link } from "react-router-dom";

export default function ListTile(props) {
  const useStyles = makeStyles({
    cardStyle: {
      border: "1px solid #20c4cc",
      margin: "1rem",
      height: "7rem",
      backgroundColor: Theme.palette.tertiary.main,
      borderRadius: "0.5rem",
    },
    linkStyle: {
      textDecoration: "none",
      color: Theme.palette.secondary.main,
      fontFamily: Theme.typography.h6,
    },
    btnStyle: Theme.buttons.tile,
  });
  const classes = useStyles();

  const listName = props.list.list_name_encoded

  console.log("list", props.list);
  return (
    <Grid item xs={12} sm={6} md={3} className={classes.cardStyle}>
      <button className={classes.btnStyle} color="primary">
        <Link to={`/lists/${listName}`} className={classes.linkStyle}>{props.list.list_name}</Link>
      </button>
    </Grid>
  );
}
