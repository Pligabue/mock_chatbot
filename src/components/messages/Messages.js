import React, { Component } from 'react';

import MessageList from "./message-list/MessageList"
import MessageInput from "./message-input/MessageInput"
import Box from '@material-ui/core/Box';

export default class Messages extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newMessageContent: "",
      newMessageOrigin: "user",
      newMessageDate: null,
      messages: [
        { origin: "user", content: "User message", date: "2020-04-23T11:05Z"},
        { origin: "bot", content: "Bot message", date: "2020-04-23T11:06Z"},
        { origin: "user", content: "User message", date: "2020-04-23T11:05Z"},
        { origin: "user", content: "User message", date: "2020-04-23T11:05Z"},
      ]
    }
  }
  
  cleanInput = () => {
    this.setState({
      newMessageContent: "",
      newMessageOrigin: "user",
      newMessageDate: null,
    })
  }

  handleMessageInput = (e) => {
    this.setState({
      newMessageContent: e.target.value
    })
  }

  handleMessageSubmit = (e) => {
    e.preventDefault();
    e.target.reset();

    if (this.state.newMessageContent) {
      this.setState({
        messages: [...this.state.messages, {
          content: this.state.newMessageContent,
          origin: this.state.newMessageOrigin,
          date: new Date().toISOString()
        }]
      })
      this.cleanInput()
    }
  }

  render() {
    return (
      <Box height="100%" width="100%" display="flex" flexDirection="column" boxSizing="border-box" p={3}> 
        <MessageList messages={this.state.messages} />
        <MessageInput handleMessageInput={this.handleMessageInput} handleMessageSubmit={this.handleMessageSubmit} />
      </Box>
    );
  }
}
