import React from 'react';
import { connect } from 'react-redux';

import LoginForm from './LoginForm';

import logInUser from '../../actions/logInUser';

class LoginContainer extends React.Component {

    setAuth = (data) => {
        this.props.setUserLoggedIn(data);
        this.props.history.push('/explore');
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