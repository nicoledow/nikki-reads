import React from 'react';
import { connect } from 'react-redux';

import SignUpForm from './SignUpForm';

import logInUser from '../../actions/logInUser';

class SignUpContainer extends React.Component {

    setAuth = (data) => {
        this.props.setUserLoggedIn(data);
    }

    render() {
        return <SignUpForm setAuth={this.setAuth}/>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setUserLoggedIn: data => dispatch(logInUser(data))
    }
}

export default connect(null, mapDispatchToProps)(SignUpContainer);