import React, { Component } from 'react';

import "./MessageInput.scss"

export default class MessageInput extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.props.handleMessageInput;
    this.handleSubmit = this.props.handleMessageSubmit;
    this.state = {
      message: "",
      loggedIn: props.loggedIn
    }
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <form onChange={this.handleChange} onSubmit={this.handleSubmit} className="message-form">
        <input name="message" placeholder="Enter your message here" className="message-input" />
        <button className="message-button">Send</button>
      </form>
    );
  }
}
