import React, { Component } from 'react';

import "./MessageList.scss"

export default class MessageList extends Component {

  render() {
    return (
      <div className="message-list"> 
        <UserMessage>User Message</UserMessage>
        <BotMessage>Bot Message</BotMessage>
        <BotMessage>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vulputate tempus eleifend. Praesent commodo odio eu purus tincidunt sollicitudin. Fusce rutrum nisl et erat maximus fringilla. Maecenas dapibus dolor ut eros tempus, sit amet tincidunt orci laoreet. Duis quis massa a odio vestibulum rhoncus at non ex. Nam nec nulla metus. Proin sollicitudin quam nec sagittis elementum. Donec ultricies dui in justo vulputate, eget suscipit nibh ornare. Nulla ornare volutpat dictum. Nunc aliquam sagittis ligula, ut imperdiet lectus consectetur ac. Curabitur id orci quis ante mattis consequat. Ut placerat congue magna nec ornare. Praesent maximus libero enim. Maecenas risus dolor, auctor nec fermentum ac, gravida id nibh.
        </BotMessage>
        <UserMessage>
        Nunc finibus placerat arcu, ut dignissim felis volutpat a. Aenean sit amet efficitur velit, quis ultrices elit. Nullam accumsan elementum ipsum sit amet iaculis. Ut vitae eros mi. Phasellus ut leo iaculis, malesuada quam eu, sagittis nibh. Maecenas mollis eget lectus eget tristique. Proin tincidunt scelerisque lacinia. Aliquam interdum viverra quam, et pharetra justo sodales eu. Morbi quis porttitor lacus. Morbi ac varius velit, ut interdum ligula. Donec egestas felis nisi, vitae posuere arcu viverra pulvinar.
        </UserMessage>
      </div>
    );
  }
}


function UserMessage(props) {
  return <Message origin="user">{props.children}</Message>
}

function BotMessage(props) {
  return <Message origin="bot">{props.children}</Message>
}

function Message(props) {

  let { origin } = props;
  if (origin === undefined) {
    throw new Error("Missing 'origin' parameter.")
  } else if (origin !== "bot" && origin !== "user") {
    throw new Error("Origin can only be 'user' or 'bot'.")
  }
  let content = props.children
 
  let containerClass = "message-container "
  let messageClass = "message "

  switch (origin) {
    case "user":
      containerClass += "user-message-container"
      messageClass += "user-message" 
      break;
    case "bot":
      containerClass += "bot-message-container"
      messageClass += "bot-message" 
      break;
    default:
      break;
  }
  
  return (
    <div className={containerClass}>
      <p className={messageClass}>{content}</p>
    </div>
  )
}