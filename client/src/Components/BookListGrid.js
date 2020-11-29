import React, { useState } from "react";
import { Grid, Container } from "@material-ui/core";
import ListTile from "../Components/ListTile";

function BookListGrid(props) {
  const [selectedList, selectList] = useState(null);

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
