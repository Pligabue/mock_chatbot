import React, { Component } from 'react';

import MessageList from "./components/message-list/MessageList"
import MessageInput from "./components/message-input/MessageInput"
import Box from '@material-ui/core/Box';
import { sameDay, formatTime } from '../../utils';

export default class Messages extends Component {

  render() {
    return (
      <Box height="100%" width="100%" display="flex" flexDirection="column" boxSizing="border-box" p={3}> 
        <MessageList messages={this.state.messages} />
        <MessageInput handleChange={this.handleMessageInput} handleSubmit={this.handleMessageSubmit} enabled={this.state.connected} />
      </Box>
    );
  }

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
      let { content, origin, date } = JSON.parse(e.data)
      this.addNewMessage(content, origin, date)
      this.addDateMessages()
    }
    this.addDateMessages()
  }

  handleMessageInput = (e) => {
    this.setState({ newMessageContent: e.target.value })
  }

  handleMessageSubmit = (e) => {
    e.preventDefault();
    
    if (!/^[ ]*$/.test(this.state.newMessageContent)) {
      e.target.reset();
      this.sendMessage()
      this.cleanInput()
    }
  }

  sendMessage = () => {
    this.websocket.send(JSON.stringify({
      content: this.state.newMessageContent,
      origin: "user",
      date: new Date().toISOString()
    }))
    this.addNewMessage(this.state.newMessageContent, "user", new Date().toISOString())
  }

  cleanInput = () => {
    this.setState({
      newMessageContent: "",
      newMessageOrigin: "user",
      newMessageDate: null,
    })
  }

  addNewMessage = (content, origin, date) => {
    this.setState({
      messages: [...this.state.messages, {
        content: content,
        origin: origin,
        date: date
      }]
    })
  }

  addDateMessages = () => {
    this.sortMessages()
    let { messages } = this.state
    let datedMessages = []
    let datedIndex = 0
    let lastDate = messages[0].date
    for (let i = 0; i < messages.length; i++) {
      let message = messages[i]
      if ((!sameDay(new Date(message.date), new Date(lastDate)) || i === 0) && message.origin !== "date") {
        datedMessages[datedIndex] = { origin: "date", content: formatTime.day(new Date(message.date)), date: message.date }
        datedMessages[datedIndex+1] = message
        datedIndex += 2
      } else {
        datedMessages[datedIndex] = message
        datedIndex += 1
      }
      lastDate = message.date
    }
    this.setState({ messages: datedMessages })
  }

  sortMessages = () => {
    let { messages } = this.state
    messages.sort((a, b) => (
      new Date(a.date) < new Date(b.date) ? -1 : 1
    ))
    this.setState({ messages })
  }
}
