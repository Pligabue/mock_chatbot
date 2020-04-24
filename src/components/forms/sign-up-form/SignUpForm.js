import React, { Component } from 'react';
import Form from '../Form';
import { TextField, Box } from '@material-ui/core';

export default class SignUpForm extends Component {
  render() {
    return (
      <Form title="Sign Up" action="Sign Up">
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
          <TextField 
            name="password-confirmation" 
            type="password" 
            label="Confirm password" 
            inputProps={{ style: { color: "black" } }} 
            margin="normal" 
            required 
          />
        </Box>
      </Form>
    );
  }
}
