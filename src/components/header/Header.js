import React, { Component } from 'react';

import "./Header.scss";
import robot from "../../images/robot2.png";
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/home" className="header-home">
          <img src={robot} alt="robot logo" className="header-image" />
          <h1 className="header-title">Chatbots Inc.</h1>
        </Link>
        <nav className="header-nav">
          <Link to="/login" className="header-link">Login</Link>
          <Link to="/signup" className="header-link">Sign Up</Link>
        </nav>
      </div>
    );
  }
}
