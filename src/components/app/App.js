import React, { Component } from 'react';

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Messages from '../messages/Messages';
import Footer from '../footer/Footer';
import Box from '@material-ui/core/Box';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import red from '@material-ui/core/colors/red';
import Sidebar from '../sidebar/Sidebar';


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
          <Box display="flex" flexDirection="row" height="100%">
            <Sidebar />
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
          </Box>
        </ThemeProvider>
      </Router>
    );
  }
}
