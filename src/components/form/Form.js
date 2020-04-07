import React, { Component } from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import Axios from 'axios';

export default class Form extends Component {

  constructor(props) {
    super(props);
    this.getSuccess = this.props.getSuccess
    this.getError = this.props.getError
    this.url = this.props.url
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    Axios.post(this.url, this.state)
      .then(console.log)
      .catch(console.error)
  }

  render() {
    return (
      <Box flexGrow={1} m={20}>
        <Typography variant="h3">{this.props.title}</Typography>
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          {this.props.children}
        </form>
        <Box textAlign="right" mt={4}><Button type="submit" variant="contained" color="primary">{this.props.action ? this.props.action : "send"}</Button></Box>
      </Box>
    );
  }
}
