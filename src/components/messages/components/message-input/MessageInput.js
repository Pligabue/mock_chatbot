import React from 'react';

import "./MessageInput.scss"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Icon from '@material-ui/core/Icon';
import Box from '@material-ui/core/Box';

const MessageInput = (props) => {

  return (
    <form onChange={props.handleChange} onSubmit={props.handleSubmit}>
      <Box display="flex">
        <Box flexGrow={1} mr={2}><TextField fullWidth inputProps={{ style: { color: "black" } }} disabled={!props.enabled} /></Box>
        <Button type="submit" variant="contained" color="primary" endIcon={<Icon>send</Icon>}>SEND</Button>
      </Box>
    </form>
  );
}

export default MessageInput;
