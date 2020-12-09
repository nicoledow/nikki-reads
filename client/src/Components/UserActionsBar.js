import React from 'react';
import { Button } from "@material-ui/core";
import { Redirect } from 'react-router-dom';

const UserActionsBar = props => {
    
    const logOutUser = () => {
        localStorage.removeItem('userId');
        window.location.href = '/';
    };

    return(
        <div style={{ textAlign: 'right' }}>
            <Button onClick={logOutUser}>Log Out</Button>
        </div>
    )
};


export default UserActionsBar;