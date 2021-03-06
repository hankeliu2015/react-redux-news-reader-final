import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStories } from '../actions/storyAction';
import { Link } from 'react-router-dom';
import StoriesList from '../components/storiesList';
import Card from 'react-bootstrap/Card';
import Header from '../components/header';
import currentUserFetch from '../actions/currentUserAction';

class Stories extends Component {

  componentDidMount() {
    this.props.fetchStories();
    this.props.currentUserFetch();
  }

  render() {
    const list = this.props.stories.map((story, index) => {
      return (
        <li key={index}>
          <Card body>
            <Link to={`${story ? "/comments/" + story.id : 'stories'}`}> {story ? story.title : "This Story is missing"}</Link>
          </Card>
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
  return {
    stories: state.storyReducer.stories,
    loading: state.storyReducer.loading,
    user: state.currentUserReducer.user
  }
}
export default connect(mapStatetoProps, {fetchStories, currentUserFetch})(Stories)
