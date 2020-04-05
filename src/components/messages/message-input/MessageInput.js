import React, { Component } from 'react';

import "./MessageInput.scss"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Icon from '@material-ui/core/Icon';
import Box from '@material-ui/core/Box';

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
      <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <Box display="flex">
          <Box flexGrow={1} mr={2}><TextField fullWidth inputProps={{ style: { color: "black" } }} /></Box>
          <Button type="submit" variant="contained" color="primary" endIcon={<Icon>send</Icon>}>SEND</Button>
        </Box>
      </form>
    );
  }
}
