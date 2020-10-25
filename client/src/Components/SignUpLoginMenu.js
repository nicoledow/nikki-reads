import React from 'react';
import { Grid, Container, Button, makeStyles } from "@material-ui/core";
import Theme from '../Theme/Theme';

function SignUpLoginMenu(props) {
    const myProps = props;

    const useStyles = makeStyles({
        btn: Theme.buttons.menu
      });
      const classes = useStyles();

    const showUserForm = formType => {
        myProps.hideSignupButtons(formType);
    };

    return (
        <Container>
            <Grid container spacing={2} style={{marginTop: '15%'}}>
                <Grid item xs={6} style={{textAlign: 'center'}}>
                    <Button onClick={() => showUserForm('login')} className={classes.btn}> Log In </Button>
                </Grid>
                <Grid item xs={6} style={{textAlign: 'center'}}>
                    <Button onClick={() => showUserForm('signup')} className={classes.btn}> Sign Up </Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default SignUpLoginMenu;