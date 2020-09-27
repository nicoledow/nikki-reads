import React from "react";
import {
  GridList,
  GridListTile,
  makeStyles,
  withWidth,
  isWidthUp,
  Button
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Theme from "../Theme/Theme";

function BookListGrid(props) {
  const useStyles = makeStyles({
    cardStyle: {
      border: "1px solid #20c4cc",
      width: (window.width / calculateCols()) * 0.7,
      margin: "1rem",
    },
    linkStyle: {
      textDecoration: "none",
      color: Theme.palette.secondary.main,
      fontFamily: Theme.typography.h6,
    },
  });
  const classes = useStyles();

  function calculateCols() {
    const width = props.width;

    if (isWidthUp("xl", width) || isWidthUp("lg", width)) {
      return 5;
    } else if (isWidthUp("md", width)) {
      return 3;
    } else if (isWidthUp("sm", width)) {
      return 2;
    } else {
      return 1;
    }
  }

  const cols = calculateCols();
  console.log("cols", cols);
  return (
    <GridList cols={cols}>
      {props.lists.map((list) => {
        return (
          <GridListTile padding="3" className={classes.cardStyle}>
            <Button>
              <Link
                to={`/lists/${list.list_name_encoded}`}
                className={classes.linkStyle}
              >
                {list.display_name}
              </Link>
            </Button>
          </GridListTile>
        );
      })}
    </GridList>
  );
}

export default withWidth()(BookListGrid);
