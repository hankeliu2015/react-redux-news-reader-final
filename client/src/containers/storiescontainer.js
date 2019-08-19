import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStories } from '../actions/storyAction';
import { Link } from 'react-router-dom';
import StoriesList from '../components/storiesList'

class StoriesContainer extends Component {

  componentDidMount() {
    this.props.fetchStories()
  }

  render() {

    const list = this.props.stories.map((story, index) => <li key={index}><Link to={`${story ? "/storycomments/" + story.id : 'stories'}`}> {story ? story.title : "This Story is missing"}</Link></li>)

    // const list = this.props.stories.map((story, index) => <li key={index}><Link to={`/storycomments/${story.id}`}> {story.title}</Link></li>)

    // const list = () => {
    //   if (this.props.stories.length ===0) {
    //     return (
    //       this.props.stories.map((story, index) => <li key={index}><a href="/story" data-storyid={story.id}> {story.title}</a></li>)
    //     )
    //     } else {
    //       return "...loading"
    //   }
    // }

    // debugger

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
export default connect(mapStatetoProps, {fetchStories})(StoriesContainer)
