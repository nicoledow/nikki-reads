import React from 'react';
import { Grid, Button } from '@material-ui/core';

export default function ExplorePage() {

    return (
        <Grid container direction="column">
            <Grid item>
                <Button>
                    <a href="/lists" style={{textDecoration: 'none'}}>Browse New York Times Lists</a>
                </Button>
            </Grid>
        </Grid>
    )
}