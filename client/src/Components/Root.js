import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

class Root extends React.Component {
  render() {
      if (this.props.isAuth) {
          return <Redirect to="/logs"/>;
      } else {
          return <Redirect to="/login"/>;
      }
  }
}

const mapStateToProps = state => {
    return { isAuth: state.isAuth }
};

export default connect(mapStateToProps, null)(Root);