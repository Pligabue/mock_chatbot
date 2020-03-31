import React, { Component } from 'react';

import './App.css';
import Header from '../header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MessageList from '../message-list/MessageList';
import MessageInput from '../message-input/MessageInput';
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newMessageContent: "",
      newMessageOrigin: "user",
      newMessageTimestamp: null,
      newMessages: []
    }
  }
  

  handleMessageInput = (e) => {
    this.setState({
      newMessageContent: e.target.value
    })
  }

  handleMessageSubmit = (e) => {
    e.preventDefault();
    e.target.reset();

    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date+' '+time;

    this.setState({
      newMessages: [...this.state.newMessages, {
        content: this.state.newMessageContent,
        origin: this.state.newMessageOrigin,
        timestamp: dateTime
      }]
    })
  }

  render() {        
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
              <MessageList newMessages={this.state.newMessages} />
              <MessageInput handleMessageInput={this.handleMessageInput} handleMessageSubmit={this.handleMessageSubmit} />
          </Route>
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
}
