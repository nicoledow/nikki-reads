import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import ReadingLogContainer from '../Containers/ReadingLogContainer';
import ExplorePage from '../Containers/ExplorePage';
import BookSwiperContainer from '../Containers/BookSwiperContainer';
import LoginForm from './LoginForm';
import UserLinks from './UserLinks';
import Header from './Header';
import MainMenu from './MainMenu';

export default function Root() {
    let [isLoggedIn, updateLoggedInStatus] = useState(false);

    if (localStorage.currentUserId) {
        updateLoggedInStatus(true);
    }

    if (isLoggedIn) {
        return (
            <div class="app">
                <UserLinks />
                <Header />
                <Router>
                    <MainMenu />
                    <Switch>
                        <Route exact path="/" component={Root} />
                        <Route exact path="/logs" component={ReadingLogContainer} />
                        <Route exact path="/explore" component={ExplorePage} />
                        <Route exact path="/lists/:listName" component={BookSwiperContainer} />
                        <Route exact path="/login" component={LoginForm} />
                        <Route exact path="/signup" component={LoginForm} />
                    </Switch>
                </Router>
            </div>
        )
    } else {
        window.location.href = '/';
    }

}