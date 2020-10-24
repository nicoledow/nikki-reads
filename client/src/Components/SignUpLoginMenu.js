import React from 'react';
import { Grid, Container, Button } from "@material-ui/core";

function SignUpLoginMenu(props) {
    const myProps = props;

    const showUserLoginForm = () => {
        myProps.hideSignupButtons('login');
    };

    return (
        <Container>
            <Grid container spacing={2} style={{marginTop: '15%'}}>
                <Grid item xs={6} style={{textAlign: 'center'}}>
                    <Button onClick={showUserLoginForm}> Log In </Button>
                </Grid>
                <Grid item xs={6} style={{textAlign: 'center'}}>
                    <Button> Sign Up </Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default SignUpLoginMenu;