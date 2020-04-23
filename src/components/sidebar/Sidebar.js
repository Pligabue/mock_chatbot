import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import { List, ListItem, ListItemText, Typography, Divider, ListItemIcon, Icon, Button, IconButton } from '@material-ui/core';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: true
    }
  }

  toggle = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    return (
      <Box bgcolor="background.sidebar">
        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
          {this.state.open &&
            <Link to="/" style={{ textDecoration: 'none', color: "inherit" }}>
              <Typography variant="h5" noWrap color="textPrimary" style={{ padding: "2rem" }}>Chatbots Inc.</Typography>
            </Link>
          }
          <IconButton onClick={this.toggle}><ArrowForwardIosIcon color="secondary" /></IconButton>
        </Box>
        <List color="textPrimary">
          <SidebarItem to="/login" text="Log In" open={this.state.open}><AccountCircleOutlinedIcon color="secondary" /></SidebarItem>
          <SidebarItem to="/signup" text="Sign Up" open={this.state.open}><AssignmentOutlinedIcon color="secondary" /></SidebarItem>
          <SidebarItem to="/messages" text="Messages" open={this.state.open}><CommentOutlinedIcon color="secondary" /></SidebarItem>
        </List>
      </Box>
    );
  }
}

function SidebarItem(props) {
  return (
    <Link to={props.to} style={{ textDecoration: 'none', color: "inherit" }}>
      {props.open ?  
        <ListItem button>
          <ListItemIcon>{props.children}</ListItemIcon>
          <ListItemText primary={<Typography color="textPrimary">{props.text}</Typography>} />
        </ListItem> :
        <ListItem>
          {props.children}  
        </ListItem>}
      <Divider />
    </Link>
  )
}
