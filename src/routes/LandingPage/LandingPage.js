import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <Link to="/signup">Create New Account</Link>
        <Link to="/login">Login</Link>
      </div>
    )
  }
}