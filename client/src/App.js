import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import ReadingLogContainer from "./Containers/ReadingLogContainer";
import MainMenu from "./Components/MainMenu";
import Header from "./Components/Header";
import ExplorePage from './Containers/ExplorePage';
import BookSwiperContainer from './Containers/BookSwiperContainer';
import LoginForm from './Components/LoginForm';
import Root from './Components/Root';
import UserLinks from './Components/UserLinks';
import SignUpLoginMenu from './Components/SignUpLoginMenu';
import SignUpLoginForm from './Components/LoginForm';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showLoginButtons: true
    }
  }

  hideSignupButtons = formType => {
    this.setState({ 
      showLoginButtons: false,
      displayForm: formType
     });
  }

  render() {
    console.log('app component state', this.state);

    if (localStorage.currentUserId) {
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
      if (this.state.showLoginButtons) {
        return (
          <div class="app">
            <Header />
            <SignUpLoginMenu hideSignupButtons={this.hideSignupButtons} />
          </div>
        )
      } else {
        return (
          <div class="app">
            <Header />
            <SignUpLoginForm form={this.state.formType}/>
          </div>
        )
      }
    }

  }
}


