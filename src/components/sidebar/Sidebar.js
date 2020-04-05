import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import { List, ListItem, ListItemText, Typography, Divider, ListItemIcon, Icon } from '@material-ui/core';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import { Link } from 'react-router-dom';

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
              <ListItemIcon><AccountCircleOutlinedIcon color="secondary" /></ListItemIcon>
              <ListItemText primary={<Typography color="textPrimary">Login</Typography>} />
            </ListItem>
          </Link>
          <Divider />
          <Link to="/signup" style={{ textDecoration: 'none', color: "inherit" }}>
            <ListItem button>
              <ListItemIcon><AssignmentOutlinedIcon color="secondary" /></ListItemIcon>
              <ListItemText primary={<Typography color="textPrimary">Sign Up</Typography>} />
            </ListItem>
          </Link>
          <Divider />
          <Link to="/messages" style={{ textDecoration: 'none', color: "inherit" }}>
            <ListItem button>
              <ListItemIcon><CommentOutlinedIcon color="secondary" /></ListItemIcon>
              <ListItemText primary={<Typography color="textPrimary">Messages</Typography>} />
            </ListItem>
          </Link>
        </List>
      </Box>
    );
  }
}
