import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

const Root = () => {
    
    const verifyUser = (id, token) => {
        const url = `${process.env.REACT_APP_BACKEND_BASE_URL}/users/verify`;
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: id, webToken: token })
        })
        .then(resp => resp.json())
        .then(result => {
            if (result.userFound) {
                return true;
            } else {
                return false;
            }
        })
    }


    if (localStorage.currentUserId && localStorage.webToken && verifyUser(localStorage.currentUserId, localStorage.webToken)) {
        return <Redirect to="/logs"/>;
    } else {
        return <Redirect to="/login"/>;
    }
};

export default Root;

// class Root extends React.Component {
//   render() {
//       if (this.props.isAuth) {
//           return <Redirect to="/logs"/>;
//       } else {
//           return <Redirect to="/login"/>;
//       }
//   }
// }

// const mapStateToProps = state => {
//     return { isAuth: state.isAuth }
// };

// export default connect(mapStateToProps, null)(Root);