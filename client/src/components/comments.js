import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import fetchComments from '../actions/commentFetchAction'

class Comments extends Component {

  // componentDidMount() {
  //   this.props.fetchComments();
  // }

  render(){

    // const storyComments = this.props.comments.filter(comment => parseInt(comment.story_id) ===  this.props.storyId)
    //
   const displayComments = this.props.storyComments.map((comment, index) => {
     let commentDate = new Date(comment.created_at);
     let dateString = commentDate.toLocaleTimeString();
     return (
       <li key={index}>
         Comment: {comment.story_comment}
         User: {comment.user.email};
         Created at: {dateString}
       </li>
     )
   })

// debugger
    return (
      <div>
        <h4>Comments - current user and other users's comment(s) fetched from Database</h4>
        <ul>
          {displayComments}
        </ul>
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     comments: state.commentReducer.comments
//   }
// }

// export default connect(mapStateToProps, {fetchComments})(Comments)
export default Comments
