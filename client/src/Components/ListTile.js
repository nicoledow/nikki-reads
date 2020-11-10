import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Theme from "../Theme/Theme";

export default function ListTile(props) {
  const listName = props.list.list_name_encoded;

  console.log("list", props.list);

  const handleClick = e => {
    e.target.parentElement.querySelector('div').className = classes.selectedCardHead;
  };

  const useStyles = makeStyles({
    cardStyle: {
      ...Theme.card,
    },
    linkStyle: {
      ...Theme.links.plainText,
      '&:hover': {
        cursor: "pointer",
        textDecoration: "underline"
      }
    },
    btnStyle: Theme.buttons.tile,
    unselectedCardHead: {
      backgroundColor: Theme.palette.highlight,
      height: "2rem"
    },
    selectedCardHead: {
      backgroundImage: "linear-gradient(to right, #e66465, #9198e5)",
      height: "2rem"
    }
  });
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={3} className={classes.cardStyle} onClick={e => handleClick(e)}>
      {/* <div style={{height: "2rem", backgroundColor: Theme.palette.highlight}}/> */}
      <div className={classes.unselectedCardHead}/>
      <h3 className={classes.linkStyle}>
        {props.list.list_name}
      </h3>
    </Grid>
  );
}
