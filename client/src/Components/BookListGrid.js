import React from "react";
import {
  GridList,
  GridListTile,
  Typography,
  makeStyles,
  withWidth,
  isWidthUp,
} from "@material-ui/core";
import { Link } from "react-router-dom";

function BookListGrid(props) {
  const useStyles = makeStyles({
    cardStyle: {
      border: "1px solid #20c4cc",
      width: window.width / calculateCols()
    },
  });
  const classes = useStyles();

  function calculateCols() {
    const width = props.width;
    
    if (isWidthUp("xl", width) || isWidthUp("lg", width)) {
      return 5;
    } else if (isWidthUp("md", width)) {
      return 3;
    } else if (isWidthUp('sm', width)) {
      return 2;
    } else {
      return 1;
    }
  };

  const cols = calculateCols();
  console.log('cols', cols);
  return (
    <GridList cols={cols}>
      {props.lists.map((list) => {
        return (
          <GridListTile className={classes.cardStyle}>
            <button>
              <Link to={`/lists/${list.list_name_encoded}`}>
                {list.display_name}
              </Link>
            </button>
          </GridListTile>
        );
      })}
    </GridList>
  );
}

export default withWidth()(BookListGrid);