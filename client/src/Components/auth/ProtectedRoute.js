import React from 'react';
import { Redirect } from 'react-router-dom';

const ProtectedRoute = props => {
    const Component = props.component;
    const isAuthenticated = localStorage.userId;

    return isAuthenticated ? (
        <Component />
    ) : (
        <Redirect to="/login"/>
    )
};

export default ProtectedRoute;