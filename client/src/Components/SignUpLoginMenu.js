import React from 'react';
import { Grid, Container } from "@material-ui/core";

const SignUpLoginMenu = () => {
    return (
        <Container>
            <Grid container spacing={2} style={{marginTop: '20%'}}>
                <Grid item xs={6} style={{textAlign: 'center'}}>
                    <a href="/login">Log In</a>
                </Grid>
                <Grid item xs={6} style={{textAlign: 'center'}}>
                    <a href="/signup">Sign Up</a>
                </Grid>
            </Grid>
        </Container>
    )
}

export default SignUpLoginMenu;