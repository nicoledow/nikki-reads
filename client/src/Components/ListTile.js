import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Theme from '../Theme/Theme';

export default function ListTile(props) {
  const useStyles = makeStyles({
    cardStyle: {
      border: "1px solid #20c4cc",
      margin: '1rem',
      height: '4rem'
    },
    linkStyle: {
      textDecoration: "none",
      color: Theme.palette.secondary.main,
      fontFamily: Theme.typography.h6,
    },
  });
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.cardStyle}>
      {props.list.list_name}
    </Grid>
  );
}
