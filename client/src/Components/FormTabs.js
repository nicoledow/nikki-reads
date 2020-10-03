import React from 'react';
import { makeStyles, Grid, Container, Button } from "@material-ui/core";

export default function(props) {
    return (
        <Container>
        <Grid container xs={12}>
          <Grid item xs={2}/>
          <Grid item xs={4} id="login">
            <Button onClick={e => props.switchForm(e)}>
              Log In
            </Button>
          </Grid>
          <Grid item xs={4} id="signup">
            <Button onClick={e => props.switchForm(e)}>
              Sign Up
            </Button>
          </Grid>
          <Grid item xs={2}/>
        </Grid>
      </Container>
    )
}