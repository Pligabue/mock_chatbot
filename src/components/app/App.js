import React, { Component } from 'react';

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Messages from '../messages/Messages';
import Box from '@material-ui/core/Box';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import red from '@material-ui/core/colors/red';
import Sidebar from '../sidebar/Sidebar';
import LoginForm from '../form/login-form/LoginForm';
import SignUpForm from '../form/sign-up-form/SignUpForm';


const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: {
      main: "#eceff1"
    },
    background: {
      messages: indigo[50],
      sidebar: indigo[900],
      botMessage: indigo[900],
      userMessage: indigo[800]
    },
    text: {
      primary: indigo[50],
      secondary: indigo[200]
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
          <Box display="flex" flexDirection="row" height="100%">
            <Sidebar />
            <Box flexGrow={1} display="flex" justifyContent="center" alignItems="center">
              <Switch>
                <Route path="/login">
                  <LoginForm />
                </Route>
                <Route path="/signup">
                  <SignUpForm />
                </Route>
                <Route path="/messages">
                  <Messages />
                </Route>
                <Route path="/">
                  <h1>Home</h1>
                </Route>
              </Switch>
            </Box>
          </Box>
        </ThemeProvider>
      </Router>
    );
  }
}
