import React from 'react';
import logo from '../logo.svg';

export default function header(props) {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
        {props.username ? `Hi ${props.username}!` : '' } Welcome to News Feed from Hacker News. Please sign in to add your comments or post your own stories.
        </p>
      
      </header>
    </div>
  )
}
