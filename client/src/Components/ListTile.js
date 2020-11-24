import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Theme from "../Theme/Theme";
import BookSwiper from "./BookSwiper";

export default function ListTile(props) {
  const listName = props.list.display_name;
  const isSelected = props.selected;

  const handleClick = (e) => {
    props.selectList((prevList) => {
      return listName;
    });
  };

  const useStyles = makeStyles({
    cardStyle: {
      ...Theme.card,
    },
    linkStyle: {
      ...Theme.links.plainText,
      "&:hover": {
        cursor: "pointer",
        textDecoration: "underline",
      },
    },
    btnStyle: Theme.buttons.tile,
    unselectedCardHead: {
      backgroundColor: Theme.palette.highlight,
      height: "2rem",
    },
    selectedCardHead: {
      backgroundImage: "linear-gradient(to right, #e66465, #9198e5)",
      height: "2rem",
    },
  });
  const classes = useStyles();

  if (isSelected) {
    return (
      <BookSwiper list={props.list}/>
    )
  } else {
    return (
      <Grid item xs={12} sm={6} md={3} className={classes.cardStyle}>
        <div className={isSelected ? classes.selectedCardHead : classes.unselectedCardHead}/>
        <h3 className={classes.linkStyle} onClick={(e) => handleClick(e)}>
          {listName}
        </h3>
      </Grid>
    );
  }
}
