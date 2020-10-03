import React from 'react';
import ExploreOptionsMenu from '../Components/ExploreOptionsMenu';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';

class ExplorePage extends React.Component {

    render() {
        if (!this.props.isAuth) {
            return <Redirect to="/login"/>;
        }
        return (
            <div>
                <ExploreOptionsMenu/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { isAuth: state.isAuth };
}

export default connect(mapStateToProps)(ExplorePage);