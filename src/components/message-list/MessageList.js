import React, { Component } from 'react';

import "./MessageList.scss"

export default class MessageList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: [
        <UserMessage key={1}>User Message</UserMessage>,
        <BotMessage key={2}>Bot Message</BotMessage>,
        <BotMessage key={3}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vulputate tempus eleifend. Praesent commodo odio eu purus tincidunt sollicitudin. Fusce rutrum nisl et erat maximus fringilla. Maecenas dapibus dolor ut eros tempus, sit amet tincidunt orci laoreet. Duis quis massa a odio vestibulum rhoncus at non ex. Nam nec nulla metus. Proin sollicitudin quam nec sagittis elementum. Donec ultricies dui in justo vulputate, eget suscipit nibh ornare. Nulla ornare volutpat dictum. Nunc aliquam sagittis ligula, ut imperdiet lectus consectetur ac. Curabitur id orci quis ante mattis consequat. Ut placerat congue magna nec ornare. Praesent maximus libero enim. Maecenas risus dolor, auctor nec fermentum ac, gravida id nibh.
        </BotMessage>,
        <UserMessage key={4}>
        Nunc finibus placerat arcu, ut dignissim felis volutpat a. Aenean sit amet efficitur velit, quis ultrices elit. Nullam accumsan elementum ipsum sit amet iaculis. Ut vitae eros mi. Phasellus ut leo iaculis, malesuada quam eu, sagittis nibh. Maecenas mollis eget lectus eget tristique. Proin tincidunt scelerisque lacinia. Aliquam interdum viverra quam, et pharetra justo sodales eu. Morbi quis porttitor lacus. Morbi ac varius velit, ut interdum ligula. Donec egestas felis nisi, vitae posuere arcu viverra pulvinar.
        </UserMessage>,
        <UserMessage key={5}>
        Aenean nec tincidunt augue. Suspendisse nec magna sagittis nisi tincidunt convallis in a purus. Integer at justo quis sapien pharetra eleifend at ac odio. Etiam pretium, turpis sit amet finibus condimentum, elit arcu ullamcorper nulla, vel congue neque mauris efficitur nisl. Ut imperdiet sollicitudin est, a pellentesque lacus scelerisque ut. Nullam efficitur lectus eu nunc pretium, vitae mollis felis tincidunt. Nullam hendrerit, nunc et bibendum suscipit, mi purus tristique sem, eu euismod tellus purus mattis metus. Proin turpis nulla, efficitur a odio non, varius lobortis dui. Praesent blandit varius enim eu efficitur.
        </UserMessage>,
        <BotMessage key={6}>
        Nunc ut porta ipsum. Nullam id sem eget purus eleifend venenatis. Quisque nisi magna, dictum eget imperdiet at, hendrerit vel magna. Sed pulvinar viverra sagittis. Curabitur ullamcorper sed neque at commodo. Phasellus consequat facilisis metus, sit amet placerat sapien tempor nec. Pellentesque in neque tempor, porttitor lorem in, mollis diam. Integer venenatis vel dui nec fermentum. Vestibulum at velit vel purus tincidunt euismod.
        </BotMessage>
      ]
    }
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.newMessages !== this.props.newMessages) {
      let newMessages = []
      for (let message of this.props.newMessages) {
        if (message.origin === "user") {
          newMessages = [...newMessages, <UserMessage key={message.timestamp}>{message.content}</UserMessage>]
        } else if (message.origin === "bot") {
          newMessages = [...newMessages, <BotMessage key={message.timestamp}>{message.content}</BotMessage>]
        }
      }
      this.setState({
        newMessages: newMessages
      })
    }
  }

  render() {
    return (
      <div className="message-list-container">
        <div className="message-list"> 
          {this.state.newMessages}
          {this.state.messages}
        </div>
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