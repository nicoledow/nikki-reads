import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Grid, makeStyles, ThemeProvider } from "@material-ui/core";
import ReadingLogContainer from "./Containers/ReadingLogContainer";
import ExplorePage from "./Containers/ExplorePage";
import BookSwiperContainer from "./Containers/BookSwiperContainer";
import LoginForm from "./Components/auth/LoginForm";
import UserLinks from "./Components/UserLinks";
import Header from "./Components/Header";
import MainMenu from "./Components/MainMenu";
import Home from "./Containers/Home";
import NYTListsMenu from "./Components/NYTListsMenu";
import Theme from "./Theme/Theme";

export default function App({children}) {
  return (
    <div>
      <Header/>
      {children}
    </div>
  )
}

