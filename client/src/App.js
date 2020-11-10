import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Grid, makeStyles, ThemeProvider } from "@material-ui/core";
import ReadingLogContainer from "./Containers/ReadingLogContainer";
import ExplorePage from "./Containers/ExplorePage";
import BookSwiperContainer from "./Containers/BookSwiperContainer";
import LoginForm from "./Components/LoginForm";
import UserLinks from "./Components/UserLinks";
import Header from "./Components/Header";
import MainMenu from "./Components/MainMenu";
import Home from "./Containers/Home";
import NYTListsMenu from "./Components/NYTListsMenu";
import Theme from "./Theme/Theme";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: localStorage.currentUserId ? true : false,
      currentUserId: localStorage.currentUserId || null,
    };
    this.classes = makeStyles({ main: Theme.main });
  }

  render() {
    console.log("current user id", localStorage.currentUserId);

    if (this.state.isLoggedIn) {
      console.log("logged in");
      return (
        <ThemeProvider>
          <div style={Theme.main}>
            <UserLinks />
            <Header />
            <Router>
              <MainMenu />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/logs" component={ReadingLogContainer} />
                <Route exact path="/explore" component={ExplorePage} />
                <Route exact path="/lists" component={NYTListsMenu} />
                <Route
                  exact
                  path="/lists/:listName"
                  component={BookSwiperContainer}
                />
                <Route exact path="/login" component={LoginForm} />
                <Route exact path="/signup" component={LoginForm} />
              </Switch>
            </Router>
          </div>
        </ThemeProvider>
      );
    } else {
      return (
        <div className="app">
          <Header />
          <LoginForm />
        </div>
      );
    }
  }
}
