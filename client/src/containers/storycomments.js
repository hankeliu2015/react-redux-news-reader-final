import React, { Component } from 'react';
import NewComment from '../components/NewComment';
import CommentList from '../components/commentList';
import StoryShow from '../components/storyShow';
import { connect } from 'react-redux';
import { fetchSingleStory } from '../actions/singleStoryAction';
import fetchComments from '../actions/commentFetchAction'

class StoryComments extends Component {

  componentDidMount() {
    this.props.fetchSingleStory(this.props.match.params.id);
    this.props.fetchComments();
    }

  reloadSingleStory = () => {

    const story = this.props.singleStory

    const storyComments = this.props.comments.filter(comment => parseInt(comment.story_id) ===  story.id)

    const displayComments = storyComments.slice(0).reverse().map((comment, index) => {

      let commentDate = new Date(comment.created_at);
      let dateString = commentDate.toLocaleTimeString();

      return (
        <li key={index}>
          Comment: {comment.story_comment};
          User: {comment.user.email};
          Created at: {dateString}
        </li>
      )
    })

    if (story) {
      return  (
        <div>
          <StoryShow story={story} />
          <hr></hr>
          <NewComment storyId={story.id} />
          <hr></hr>
          <CommentList storyComments={storyComments} displayComments={displayComments} />
          <hr></hr>
        </div>
      )
    } else {
      return (
        <div> ...loading </div> //need another condition to remind user back to storylist.
      )
    }
  }

  render() {
    return (
      <div>
        {this.reloadSingleStory()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    stories: state.storyReducer.stories,
    singleStory: state.storyReducer.singleStory,
    comments: state.commentReducer.comments
  }
}

export default connect(mapStateToProps, {fetchSingleStory, fetchComments})(StoryComments)
