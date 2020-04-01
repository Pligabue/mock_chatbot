import React, { Component } from 'react';

import "./Messages.scss"

import MessageList from "./message-list/MessageList"
import MessageInput from "./message-input/MessageInput"

export default class Messages extends Component {

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
      <div className="messages"> 
        <MessageList newMessages={this.state.newMessages} />
        <MessageInput handleMessageInput={this.handleMessageInput} handleMessageSubmit={this.handleMessageSubmit} />
      </div>
    );
  }
}
