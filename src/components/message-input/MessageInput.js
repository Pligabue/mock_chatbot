import React, { Component } from 'react';

import "./MessageInput.scss"

export default class MessageInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: "",
      loggedIn: props.loggedIn
    }
  }

  componentDidMount() {
    
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
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
