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
      newMessageTimestamp: null,
      newMessages: []
    }
  }
  
  cleanInput = () => {
    this.setState({
      newMessageContent: "",
      newMessageOrigin: "user",
      newMessageTimestamp: null,
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
    
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date+' '+time;

    if (this.state.newMessageContent) {
      this.setState({
        newMessages: [...this.state.newMessages, {
          content: this.state.newMessageContent,
          origin: this.state.newMessageOrigin,
          timestamp: dateTime
        }]
      })
      this.cleanInput()
    }
  }

  render() {
    return (
      <Box display="flex" flexDirection="column" boxSizing="border-box" height="100%" overflow="hidden" p={3}> 
        <MessageList newMessages={this.state.newMessages} />
        <MessageInput handleMessageInput={this.handleMessageInput} handleMessageSubmit={this.handleMessageSubmit} />
      </Box>
    );
  }
}
