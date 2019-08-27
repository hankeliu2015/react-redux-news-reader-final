import React, { Component } from 'react';
import logo from '../logo.svg';

class Header extends Component {
  render(){
    return (
      <div>
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
      {this.props.username ? `Hi ${this.props.username}!` : '' } Welcome to News Feed from Hacker News. Please sign in to add your comments or post your own stories.
      </p>
      </header>
      </div>
    )
  }
}

export default Header
