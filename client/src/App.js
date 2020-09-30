import React from "react";
import "./App.css";
import TestComponent from "./Components/TestComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReadingLogContainer from "./Containers/ReadingLogContainer";
import MainMenu from "./Components/MainMenu";
import Header from "./Components/Header";
import ExplorePage from './Containers/ExplorePage';
import BookSwiperContainer from './Containers/BookSwiperContainer';
import LoginForm from './Components/LoginForm';
import SignupForm from './Components/SignupForm';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import { ThumbDown } from "@material-ui/icons";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <MainMenu />
        <Switch>
          <Route exact path="/logs" component={ReadingLogContainer} />
          <Route exact path="/explore" component={ExplorePage}/>
          <Route exact path="/lists/:listName" component={BookSwiperContainer}/>
          <Route exact path="/login" component={LoginForm}/>
          <Route exact path="/signup" component={SignupForm}/>
        </Switch>
      </Router>
    </div>
  );
}

// library.add(faCoffee, ThumbDown);

export default App;
