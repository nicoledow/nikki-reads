import React, { useState } from "react";
import { Redirect } from 'react-router-dom';

import { Grid, makeStyles } from "@material-ui/core";
import Theme from "../Theme/Theme";
import BooksContainer from "../Containers/BooksContainer";

const ListTile = props => {
  const listName = props.list.display_name;
  const [showBooks, selectList] = useState(false);

  const handleClick = () => {
    selectList(true);
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

  if (showBooks) {
    return (
      <BooksContainer list={props.list}/>
    )
  } else {
    return (
      <Grid item xs={12} sm={6} md={3} className={classes.cardStyle}>
        <div className={classes.unselectedCardHead}/>
        <h3 className={classes.linkStyle} onClick={handleClick}>
          {listName}
        </h3>
      </Grid>
    );
  }
}

export default ListTile;