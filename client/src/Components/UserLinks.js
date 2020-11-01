import { Typography, makeStyles, Button } from '@material-ui/core';
import React from 'react';

const UserLinks = () => {
    const useStyles = makeStyles({
        floatRight: {
            float: 'right',
            marginRight: '1rem'
        }
    });
    const classes = useStyles();

    const logOutUser = () => {
        localStorage.currentUserId = null;
    }

    if (localStorage.currentUserId) {
        console.log('local storage', localStorage)
        return (
            <Button className={classes.floatRight} onClick={logOutUser}>
                Log Out
            </Button>
        )
    } else {
        return (
            <Typography style={{ flex: 1 }}>
                <a href="/login"> Log In</a>
                <a href="/signup">Sign Up</a>
            </Typography>
        )
    }
};

export default UserLinks