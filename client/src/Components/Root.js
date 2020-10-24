import React, { useEffect, useState } from 'react';
import { Redirect } from "react-router-dom";

function Root() {
    let [loggingIn, updateLoggingIn] = useState(true);
    let [userVerified, updateUserVerified] = useState(false);

    const setUserLoggedIn = () => {
        updateUserVerified((prevState) => {
            return true;
        });

        updateLoggingIn((prevState) => {
            return false;
        });
    };

    const setUserLoginFailed = () => {
        updateLoggingIn((prevState) => {
            return false;
        });
    };
    
    const verifyUser = (id, token) => {
        if (!id || !token) {
            return false;
        }

        const url = `${process.env.REACT_APP_BACKEND_BASE_URL}/users/verify`;
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: id, webToken: token })
        })
        .then(resp => resp.json())
        .then(result => {
            console.log('result', result);
            if (result.userFound) {
                console.log('user found', result);
                // setUserLoggedIn();
            } else {
                console.log('user not found', result);
                // setUserLoginFailed();
            }
        })
    }

    useEffect(() => {
        verifyUser(localStorage.currentUserId, localStorage.webToken);
    }, [])

    // if (!loggingIn && userVerified) {
    //     return <Redirect to="/logs"/>;
    // } else if (loggingIn) {
    //     return <div>Logging in...</div>
    // } else {
    //     console.log('checks not met')
    //     return <Redirect to="/login"/>;
    // }
    return (
        <div>Root</div>
    )
};

export default Root;