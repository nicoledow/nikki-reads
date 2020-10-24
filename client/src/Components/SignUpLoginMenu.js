import React from 'react';
import { Grid, Container, Button } from "@material-ui/core";

function SignUpLoginMenu(props) {
    const myProps = props;

    const showUserForm = formType => {
        myProps.hideSignupButtons(formType);
    };

    return (
        <Container>
            <Grid container spacing={2} style={{marginTop: '15%'}}>
                <Grid item xs={6} style={{textAlign: 'center'}}>
                    <Button onClick={() => showUserForm('login')}> Log In </Button>
                </Grid>
                <Grid item xs={6} style={{textAlign: 'center'}}>
                    <Button onClick={() => showUserForm('signup')}> Sign Up </Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default SignUpLoginMenu;