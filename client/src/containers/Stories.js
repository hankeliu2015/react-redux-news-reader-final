import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStories } from '../actions/storyAction';
import { Link } from 'react-router-dom';
import StoriesList from '../components/storiesList';

class Stories extends Component {

  componentDidMount() {
    this.props.fetchStories()
  }

  render() {
    const list = this.props.stories.map((story, index) => {

      return (
        <li key={index}>
          <Link to={`${story ? "/comments/" + story.id : 'stories'}`}> {story ? story.title : "This Story is missing"}</Link>
        </li>
      )
    })

    return (
      <div>
        <StoriesList list={list} loading={this.props.loading} />
      </div>
    )
  }
}

const mapStatetoProps = state => {
  return {
    stories: state.storyReducer.stories,
    loading: state.storyReducer.loading
  }
}
export default connect(mapStatetoProps, {fetchStories})(Stories)
