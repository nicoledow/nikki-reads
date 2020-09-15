import React from "react";
import "./App.css";
import TestComponent from "./Components/TestComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReadingLogContainer from "./Containers/ReadingLogContainer";
import MainMenu from "./Components/MainMenu";
import Header from "./Components/Header";
import ExplorePage from './Containers/ExplorePage';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <MainMenu />
        <Switch>
          <Route exact path="/logs" component={ReadingLogContainer} />
          <Route exact path="/explore" component={ExplorePage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
