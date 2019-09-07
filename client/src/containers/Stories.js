import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStories } from '../actions/storyAction';
import { Link } from 'react-router-dom';
import StoriesList from '../components/storiesList';
import StoryCard from '../components/StoryCard';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Header from '../components/header';
import currentUserFetch from '../actions/currentUserAction';
import { likeAllOnStoriesFetch } from '../actions/likeAllOnStoriesFetchAction';

class Stories extends Component {

  componentDidMount() {
    this.props.fetchStories();
    this.props.currentUserFetch();
    this.props.likeAllOnStoriesFetch();
  }

  render() {
    // debugger
    const list = this.props.stories.map((story, index) => {
      // debugger
      return (
        <li key={index}>
          <StoryCard story = {story} />
        </li>
      )
    })

    return (
      <div>
        <Header username = {this.props.user.username}/>
        <StoriesList list={list} loading={this.props.loading} />
      </div>
    )
  }
}

const mapStatetoProps = state => {
  // debugger
  return {
    stories: state.storyReducer.stories,
    loading: state.storyReducer.loading,
    user: state.currentUserReducer.user,
    allLikes: state.likeVoteReducer.allLikes
  }
}
export default connect(mapStatetoProps, {fetchStories, currentUserFetch, likeAllOnStoriesFetch})(Stories)
