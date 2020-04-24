import React, { Component } from 'react';
import Form from '../Form';
import { TextField, Box } from '@material-ui/core';

export default class LoginForm extends Component {
  render() {
    return (
      <Form title="Log In" action="Log In">
        <Box display="flex" flexDirection="column">
          <TextField 
            name="email" 
            type="email" 
            label="E-mail" 
            inputProps={{ style: { color: "black" } }} 
            margin="normal" 
            required 
          />
          <TextField 
            name="password" 
            type="password" 
            label="Password" 
            inputProps={{ style: { color: "black" } }} 
            margin="normal" 
            required 
          />
        </Box>
      </Form>
    );
  }
}
