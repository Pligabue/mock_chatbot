import React, { useState, useEffect, useRef } from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { sameDay, formatTime } from '../../../../utils';

export default function MessageList(props) {

  const messageList = useRef(null)

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

  useEffect(() => {
    let sortedMessages = [...props.messages]
    sortedMessages.sort((a, b) => (
        new Date(a.date) < new Date(b.date) ? -1 : 1
    ))
    sortedMessages = addDateMessages(sortedMessages)
    setSortedMessages(sortedMessages)
  }, [props.messages]);

  const goToTheBottom = () => {
    let node = messageList.current
    node.scrollTop = node.scrollHeight;
  }

  useEffect(() => {
    goToTheBottom()
  }, [sortedMessages]);

  return (
    <Box 
      ref={messageList}
      flexGrow="1" 
      display="flex" 
      flexDirection="column" 
      overflow="auto" 
      bgcolor="background.messages" p={2} mb={2}
    > 
      {sortedMessages.map((message, index) => (
        <Message key={index} origin={message.origin} date={message.date}>
          {message.content}
        </Message>
      ))}
    </Box>
  );
}

function Message(props) {

  let { origin, date } = props;
  if (origin === undefined) {
    throw new Error("Missing 'origin' parameter.")
  } else if (origin !== "bot" && origin !== "user" && origin !== "date") {
    throw new Error("Origin can only be 'user', 'bot' or 'date'.")
  }
  let content = props.children
   
  return (
    <Box 
      textAlign={origin === "date" ? "center" : (origin === "user" ? "right" : "left")}
      pt={2}
    >
      <Box
        display="inline-block"
        position="relative"
        maxWidth={0.7}
        textAlign="left"
        bgcolor={origin === "date" ? "secondary.light" : (origin === "user" ? "primary.light" : "primary.dark")}
        p={2}
        borderRadius={4}
        overflow="hidden"
      >
        <Typography color={origin === "date" ? "textSecondary" : "textPrimary"} component="p" style={{ wordBreak: "break-word" }}>{content}</Typography>
        {origin !== "date" && <span style={{ color: "white", position: "absolute", right: "0", bottom: "0", fontSize: "0.6rem", padding: "0.2rem" }}>{formatTime.hour(new Date(date))}</span>}
      </Box>
    </Box>
  )
}