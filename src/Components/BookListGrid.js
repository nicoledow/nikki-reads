import React from "react";
import { GridList, GridListTile, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const BookListGrid = (props) => {
  const showList = (event) => {
    console.log(props.lists);
    const listTitle = event.target.id;
    console.log("list title", listTitle);
  };

  return (
    <GridList cols={5}>
      {props.lists.map((list) => {
        return (
          <GridListTile>
            <button>
              <Link to={`/lists/${list.list_name}`}>{list.display_name}</Link>
            </button>
          </GridListTile>
        );
      })}
    </GridList>
  );
};

export default BookListGrid;
