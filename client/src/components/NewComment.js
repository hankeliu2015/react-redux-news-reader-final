import React, { Component } from 'react';
import { connect } from 'react-redux';
import { commentUpload } from '../actions/commentAction';
// import Button from 'react-bootstrap/Button'

class NewComment extends Component {

  state = {
    story_comment: ""     //need to be the same as database column
  }

  handleOnChange = event => {
    if (this.props.storyId) {
      this.setState({
        [event.target.name]: event.target.value,
        story_id: this.props.storyId
      })
    }
    else if (this.props.postId) {
      this.setState({
        [event.target.name]: event.target.value,
        post_id: this.props.postId
      })
    }
  }

  handleOnSubmit = event => {
    event.preventDefault();
    let valueCSRF = document.querySelector('meta[name="csrf-token"]').content;
    this.props.commentUpload(this.state, valueCSRF);
    this.setState({
      story_comment: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Please add your comment</label>
          <br></br>
          <textarea value={this.state.story_comment} name="story_comment" rows="5" cols="60" onChange={this.handleOnChange}></textarea>
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default connect(null, {commentUpload})(NewComment)
