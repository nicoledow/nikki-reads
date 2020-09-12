import React from "react";
import "./App.css";
import TestComponent from "./Components/TestComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReadingLogContainer from "./Containers/ReadingLogContainer";
import MainNav from "./Components/MainNav";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <MainNav />
        <Switch>
          <Route exact path="/logs" component={ReadingLogContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
