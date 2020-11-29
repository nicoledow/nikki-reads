import React, { useState } from "react";
import { Grid, Container, makeStyles } from "@material-ui/core";
import ListTile from "../Components/ListTile";
import Theme from "../Theme/Theme.js";
import BookSwiper from "./BookSwiper";

function BookListGrid(props) {
  const [selectedList, selectList] = useState(null);
  console.log("booklistgrid state - selectedList", selectedList);

  if (selectedList) {
    return <BookSwiper list={selectedList} />;
  }
  
  return (
    <Container>
      <Grid container spacing={5}>
        {props.lists.map((list) => {
          return (
            <ListTile
              key={list.list_name_encoded}
              list={list}
              selected={selectedList === list.display_name ? true : false}
              selectList={selectList}
            />
          );
        })}
      </Grid>
    </Container>
  );
}
export default BookListGrid;
