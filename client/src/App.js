import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReadingLogContainer from './Containers/ReadingLogContainer';
import ExplorePage from './Containers/ExplorePage';
import BookSwiperContainer from './Containers/BookSwiperContainer';
import LoginForm from './Components/LoginForm';
import UserLinks from './Components/UserLinks';
import Header from './Components/Header';
import MainMenu from './Components/MainMenu';
import Home from './Containers/Home';
import Theme from './Theme/Theme';

export default function App() {

  const isLoggedIn = localStorage.currentUserId;

  if (isLoggedIn) {
    return (
      <div class="app">
        <UserLinks />
        <Header />
        <Router>
          <MainMenu />
          <Switch>
            <Route exact path="/" component={Home} />
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
    return (
      <div className="app">
        <Header />
        <LoginForm />
        <div style={{textAlign: 'center'}}>
          New user?
          <a href="/signup" style={Theme.links.plainText}>Sign up here.</a>
        </div>
      </div>
    )
  }

}