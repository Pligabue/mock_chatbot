import React from 'react';
import './App.css';
import Header from '../header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MessageList from '../message-list/MessageList';
import MessageInput from '../message-input/MessageInput';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/login">
            <h1>Login</h1>
          </Route>
          <Route path="/signup">
            <h1>Sign Up</h1>
          </Route>
          <Route path="/messages">
              <MessageList />
              <MessageInput />
          </Route>
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
