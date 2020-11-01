import React from 'react';
import { Grid } from '@material-ui/core';
import CurrentBooks from '../Components/CurrentBooks';
import ReadingLogger from '../Components/ReadingLogger';

const ReadingLogContainer = () => {
    return(
        <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
                <CurrentBooks />
            </Grid>
            <Grid item xs={12} sm={8} >
                <ReadingLogger />
            </Grid>
        </Grid>
    )
}
export default ReadingLogContainer;