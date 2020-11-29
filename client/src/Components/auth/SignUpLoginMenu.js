import React from 'react';
import { Grid, Container, Button, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import Theme from '../../Theme/Theme';
import requireAuth from './requireAuth';
import MainMenu from '../MainMenu';

function SignUpLoginMenu() {

    const useStyles = makeStyles({
        btn: Theme.buttons.menu
      });
      const classes = useStyles();

    if (localStorage.token) {
        return <MainMenu />;
    }

    return (
        <Container>
            <Grid container spacing={2} style={{marginTop: '15%'}}>
                <Grid item xs={6} style={{textAlign: 'center'}}>
                    <Button className={classes.btn}> <Link to="/signup">Sign Up </Link></Button>
                </Grid>
                <Grid item xs={6} style={{textAlign: 'center'}}>
                    <Button className={classes.btn}> <Link to="/login">Log In</Link> </Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default connect(requireAuth)(SignUpLoginMenu);