import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import { Drawer, List, ListItem, ListItemText, withStyles, Typography, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';

const White = withStyles({
  paper: {
    position: "static",
  }
})(Drawer)

export default class Sidebar extends Component {
  render() {
    return (
      <Box bgcolor="background.sidebar">
        <Link to="/" style={{ textDecoration: 'none', color: "inherit" }}>
          <Typography variant="h5" noWrap color="textPrimary" style={{ padding: "2rem" }}>Chatbots Inc.</Typography>
        </Link>
        <List color="textPrimary">
          <Link to="/login" style={{ textDecoration: 'none', color: "inherit" }}>
            <ListItem button>
              <ListItemText style={{ color: "white" }}>Login</ListItemText>
            </ListItem>
          </Link>
          <Divider />
          <Link to="/signup" style={{ textDecoration: 'none', color: "inherit" }}>
            <ListItem button>
              <ListItemText style={{ color: "white" }}>Sign Up</ListItemText>
            </ListItem>
          </Link>
          <Divider />
          <Link to="/messages" style={{ textDecoration: 'none', color: "inherit" }}>
            <ListItem button>
              <ListItemText style={{ color: "white" }}>Messages</ListItemText>
            </ListItem>
          </Link>
        </List>
      </Box>
    );
  }
}
