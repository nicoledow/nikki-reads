import React, { useEffect, useState } from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import Theme from "../Theme/Theme";

const CurrentBooks = () => {
  let [books, updateBooks] = useState([])
 
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/users/${localStorage.currentUserId}/currentBooks`)
    .then(resp => resp.json())
    .then(result => {
      console.log('result', result);
    })
    .catch(err => console.log('err', err))
  }, []);

  return (
    <Grid container style={{ marginLeft: '2rem', width: '100%' }}>
      <Grid item xs={12}>
        {/*load current books in this grid item*/}
      </Grid>
      <Grid item xs={12}>
        <form>
          <input type="text" name="title"/>
          <input type="submit" value="Add"/>
        </form>
      </Grid>
    </Grid>
  );
};

export default CurrentBooks;
