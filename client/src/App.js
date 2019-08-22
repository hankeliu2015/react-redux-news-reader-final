import React from 'react';
import logo from './logo.svg';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import PostListTutorial from './components/PostListTutorial';
import './App.css';
import NewPostTutorial from './components/NewPostTutorial';

import Stories from './containers/Stories';
import Comments from './containers/Comments';
import Navbar from './components/navbar';
import Posts from './containers/Posts';
// import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <br></br>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to News Feed from Hacker News. Please add your comments or post your own stories.
          </p>

        </header>

        <Route exact path="/" component={Stories} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path='/comments/:id' component={Comments} />

      </div>
    </Router>
  );
}

export default App;
