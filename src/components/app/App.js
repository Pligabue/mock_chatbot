import React, { Component } from 'react';

import './App.css';
import Header from '../header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Messages from '../messages/Messages';
import Footer from '../footer/Footer';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: red,
    background: {
      messages: indigo[50],
      sidebar: indigo[900],
      botMessage: indigo[900],
      userMessage: indigo[800]
    },
    text: {
      primary: indigo[50]
    }
  },
  status: {
    danger: 'orange',
  }
});
export default class App extends Component {

  render() {        
    return (
      <Router>
        <ThemeProvider theme={theme}>
            <Switch>
            <Route path="/login">
              <h1>Login</h1>
            </Route>
            <Route path="/signup">
              <h1>Sign Up</h1>
            </Route>
            <Route path="/messages">
              <Messages />
            </Route>
            <Route path="/">
              <h1>Home</h1>
            </Route>
          </Switch>
        </ThemeProvider>
      </Router>
    );
  }
}
