import React, { Component } from 'react';
import { connect } from 'react-redux';

export default authRequiredChildComponent => {
    class AuthComponent extends Component {

        componentDidMount() {
            this.shouldNavigateAway();
        }

        componentDidUpdate() {
            this.shouldNavigateAway();
        }

        shouldNavigateAway = () => {
            if (!localStorage.userId || !localStorage.token) {
                this.props.history.push('/');
            }
        } 

        render() {
            return <authRequiredChildComponent {...this.props} />;
        }
    }

    function mapStateToProps(state) {
        return { isAuth: state.isAuth }
    }
    return connect(mapStateToProps)(AuthComponent);
}