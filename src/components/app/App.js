import React, { Component } from 'react';

import './App.css';
import Header from '../header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Messages from '../messages/Messages';
import Footer from '../footer/Footer';

export default class App extends Component {

  render() {        
    return (
      <Router>
        <div className="main-section">
          <Header />
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
        </div>
        <Footer />
      </Router>
    );
  }
}
