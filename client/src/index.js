import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route } from "react-router-dom";

import ProtectedRoute from './Components/auth/ProtectedRoute';

import mainReducer from "./reducers/main";
import SignUpLoginMenu from "./Components/auth/SignUpLoginMenu";
import LoginForm from './Components/auth/LoginForm';
import SignUpForm from './Components/auth/SignUpForm';
import Theme from "./Theme/Theme";
import NYTListsMenu from './Components/NYTListsMenu';

const store = createStore(mainReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <App>
            <Route path="/" exact component={SignUpLoginMenu}/>
            <Route path="/login" exact component={LoginForm} />
            <Route path="/signup" exact component={SignUpForm}/>
            <Route path="/lists" exact component={NYTListsMenu}/>
          </App>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
