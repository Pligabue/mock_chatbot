import React, { Component } from 'react';

import MessageList from "./message-list/MessageList"
import MessageInput from "./message-input/MessageInput"
import Box from '@material-ui/core/Box';

export default class Messages extends Component {

  constructor(props) {
    super(props);
    this.websocket = null
    this.state = {
      connected: false,
      newMessageContent: "",
      messages: [
        { origin: "user", content: "User message", date: "2020-04-23T11:05Z"},
        { origin: "bot", content: "Bot message", date: "2020-04-23T11:06Z"},
        { origin: "user", content: "User message", date: "2020-04-23T11:05Z"},
        { origin: "user", content: "User message", date: "2020-04-23T11:05Z"},
      ]
    }
  }
  
  componentDidMount() {
    this.websocket = new WebSocket("ws://localhost:6789")
    this.websocket.onopen = () => { 
      this.setState({ connected: true })
      console.log("CONNECTED") 
    }
    this.websocket.onclose = () => {
      this.setState({ connected: false })
      console.log("DISCONNECTED") 
    }
    this.websocket.onmessage = (e) => {
      let data = JSON.parse(e.data)
      this.addMessage(data.content, data.origin, data.date)
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

    if (this.state.newMessageContent) {
      this.sendMessage()
      this.cleanInput()
    }
  }

  render() {
    return (
      <Box height="100%" width="100%" display="flex" flexDirection="column" boxSizing="border-box" p={3}> 
        <MessageList messages={this.state.messages} />
        <MessageInput handleMessageInput={this.handleMessageInput} handleMessageSubmit={this.handleMessageSubmit} enabled={this.state.connected} />
      </Box>
    );
  }

  sendMessage = () => {
    this.websocket.send(JSON.stringify({
      content: this.state.newMessageContent,
      origin: "user",
      date: new Date().toISOString()
    }))
    this.addMessage(this.state.newMessageContent, "user", new Date().toISOString())
  }

  addMessage = (content, origin, date) => {
    this.setState({
      messages: [...this.state.messages, {
        content: content,
        origin: origin,
        date: date
      }]
    })
  }

  cleanInput = () => {
    this.setState({
      newMessageContent: "",
      newMessageOrigin: "user",
      newMessageDate: null,
    })
  }
}
