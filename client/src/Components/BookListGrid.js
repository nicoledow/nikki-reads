import React from "react";
import {
  makeStyles,
  Button,
  Grid
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Theme from "../Theme/Theme";

function BookListGrid(props) {
  const useStyles = makeStyles({
    cardStyle: {
      border: "1px solid #20c4cc",
    },
    linkStyle: {
      textDecoration: "none",
      color: Theme.palette.secondary.main,
      fontFamily: Theme.typography.h6,
    },
  });
  const classes = useStyles();

  return(
    <Grid container spacing={2}>
      {props.lists.map((list) => {
        return (
          <Grid item xs={1} sm={3} md={4} lg={5} className={classes.cardStyle}>
            {list.list_name}
          </Grid>
        )
      })}
    </Grid>
  )
}
export default BookListGrid;