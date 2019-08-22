import React from 'react';
import logo from './logo.svg';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import PostListTutorial from './components/PostListTutorial';
import './App.css';
import NewPostTutorial from './components/NewPostTutorial';

import StoriesContainer from './containers/storiescontainer';
import StoryComments from './containers/storycomments';
import Navbar from './components/navbar';
import Posts from './containers/Posts'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <br></br>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Please add your comments or post your own stories. 
          </p>

        </header>

        <Route exact path="/" component={StoriesContainer} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path='/storycomments/:id' component={StoryComments} />

      </div>
    </Router>
  );
}

export default App;
