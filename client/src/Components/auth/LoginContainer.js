import React from 'react';
import { connect } from 'react-redux';

import LoginForm from './LoginForm';

import logInUser from '../../actions/logInUser';

class LoginContainer extends React.Component {

    setAuth = (data) => {
        debugger;
        this.props.setUserLoggedIn(data);
    }

    render() {
        return <LoginForm setAuth={this.setAuth}/>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setUserLoggedIn: data => dispatch(logInUser(data))
    }
}

export default connect(null, mapDispatchToProps)(LoginContainer);