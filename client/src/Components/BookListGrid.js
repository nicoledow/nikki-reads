import React from "react";
import { Grid, Container } from "@material-ui/core";
import Theme from "../Theme/Theme";
import ListTile from '../Components/ListTile';

function BookListGrid(props) {

  return (
    <Container>
      <Grid container spacing={5}>
        {props.lists.map((list) => {
          return (
            <ListTile list={list}/>
          );
        })}
      </Grid>
    </Container>
  );
}
export default BookListGrid;
