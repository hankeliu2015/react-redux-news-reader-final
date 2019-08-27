import React, { Component } from 'react';
import NewComment from '../components/NewComment';
import CommentList from '../components/commentList';
import StoryShow from '../components/storyShow';
import { connect } from 'react-redux';
import { fetchSingleStory } from '../actions/singleStoryAction';
import { fetchSinglePost } from '../actions/singlePostAction';
import fetchComments from '../actions/commentFetchAction'

class Comments extends Component {

  componentDidMount() {
    // debugger
    if (this.props.match.path === "/comments/:id") {
      this.props.fetchSingleStory(this.props.match.params.id);
      this.props.fetchComments();
    } else if (this.props.match.path === "/postcomments/:id"){
      this.props.fetchSinglePost(this.props.match.params.id);
      this.props.fetchComments();
    }

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
          User: {comment.user.username};
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

  reloadSinglePost = () => {

    const post = this.props.singlePost

    const postComments = this.props.comments.filter(comment => parseInt(comment.post_id) ===  post.id)

    const displayComments = postComments.slice(0).reverse().map((comment, index) => {

      let commentDate = new Date(comment.created_at);
      let dateString = commentDate.toLocaleTimeString();

      return (
        <li key={index}>
          Comment: {comment.story_comment};
          User: {comment.user.username};
          Created at: {dateString}
        </li>
      )
    })

    if (post) {
      return  (
        <div>
          <StoryShow post={post} />
          <hr></hr>
          <NewComment postId={post.id} />
          <hr></hr>
          <CommentList postComments={postComments} displayComments={displayComments} />
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
    comments: state.commentReducer.comments,
    singlePost: state.postReducer.singlePost
  }
}

export default connect(mapStateToProps, {fetchSingleStory, fetchComments, fetchSinglePost})(Comments)
