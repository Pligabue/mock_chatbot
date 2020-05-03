import React, { useState, useEffect, useRef } from 'react';

import MessageList from "./components/message-list/MessageList"
import MessageInput from "./components/message-input/MessageInput"
import Box from '@material-ui/core/Box';
import { sameDay, formatTime } from '../../utils';

export default function Messages(props) {

  const websocket = useRef(null)

  const [connected, setConnected] = useState(false);
  const [newMessageContent, setNewMessageContent] = useState("");
  const [messages, setMessages] = useState([
    { origin: "user", content: "User message", date: "2020-04-23T11:05Z"},
    { origin: "bot", content: "Bot message", date: "2020-04-25T11:06Z"},
    { origin: "user", content: "User message", date: "2020-04-24T11:05Z"},
    { origin: "user", content: "User message", date: "2020-04-22T11:05Z"},
  ]);
  const [sortedMessages, setSortedMessages] = useState([]);

  const addDateMessages = (sortedMessages) => {
    if (sortedMessages.length < 1) {
      return
    }
    let datedMessages = []
    let datedIndex = 0
    let lastDate = sortedMessages[0].date
    for (let i = 0; i < sortedMessages.length; i++) {
      let message = sortedMessages[i]
      if ((!sameDay(new Date(message.date), new Date(lastDate)) || i === 0) && message.origin !== "date") {
        datedMessages[datedIndex++] = { origin: "date", content: formatTime.day(new Date(message.date)), date: message.date }
      }
      datedMessages[datedIndex++] = message
      lastDate = message.date
    }
    return datedMessages
  }

  const sortMessages = () => {
    let sortedMessages = [...messages]
    sortedMessages.sort((a, b) => (
      new Date(a.date) < new Date(b.date) ? -1 : 1
    ))
    sortedMessages = addDateMessages(sortedMessages)
    setSortedMessages(sortedMessages)
  }

  const addNewMessage = (content, origin, date) => { 
    setMessages(prevMessages => [...prevMessages, { origin, content, date }]); 
  }

  const sendMessage = () => {
    addNewMessage(newMessageContent, "user", new Date().toISOString())
    websocket.current.send(JSON.stringify({
      content: newMessageContent,
      origin: "user",
      date: new Date().toISOString()
    }))
    setNewMessageContent("")
  }

  const handleMessageSubmit = (e) => {
    e.preventDefault()
    if (!/^[ ]*$/.test(newMessageContent)) {
      sendMessage()
    }
  }

  const handleMessageInput = (e) => { setNewMessageContent(e.target.value) }

  useEffect(() => {
    websocket.current = new WebSocket("ws://localhost:6789")
    websocket.current.onopen = () => { console.log("CONNECTED") }
    websocket.current.onclose = () => { console.log("DISCONNECTED") }
    websocket.current.onmessage = (e) => {
      let { content, origin, date } = JSON.parse(e.data)
      addNewMessage(content, origin, date)
    }
    setConnected(true)
    return () => {
      websocket.current.close()
    }
  }, []);

  useEffect(() => {
    sortMessages()
  }, [messages]);

  return (
    <Box height="100%" width="100%" display="flex" flexDirection="column" boxSizing="border-box" p={3}> 
      <MessageList messages={sortedMessages} />
      <MessageInput 
        value={newMessageContent}
        handleChange={handleMessageInput} 
        handleSubmit={handleMessageSubmit} 
        enabled={connected} 
      />
    </Box>
  );
}