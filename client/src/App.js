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

export default class App extends React.Component{
  constructor() {
    super();
    this.state = {
      isLoggedIn: localStorage.currentUserId ? true : false,
      currentUserId: localStorage.currentUserId || null
    }
  }

  logInUser = userId => {
    localStorage.currentUserId = userId;
    this.setState({ isLoggedIn: true, currentUserId: userId });
  }

  render() {
    if (this.state.isLoggedIn) {
      console.log('logged in')
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
      console.log('not logged in')
      return (
        <div className="app">
          <Header />
          <LoginForm logInUser={this.logInUser}/>
        </div>
      )
    }
  }

}