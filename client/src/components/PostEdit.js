import React, {Component} from 'react';
import { connect } from 'react-redux'
import { postUpload } from '../actions/postCreateAction';
import currentUserFetch from '../actions/currentUserAction';


class PostEdit extends Component {
  state = {
    content: '',
    title: ''
  }

  componentDidMount() {
    this.props.currentUserFetch();
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // handleOnSubmit = event => {
  //   event.preventDefault();
  //   let valueCSRF = document.querySelector('meta[name="csrf-token"]').content;
  //   this.props.postUpload(this.state, valueCSRF, this.props.history.push);
  // }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <h5>Edit Your Post Title</h5>
          <input type="text" name="title" onChange={this.handleOnChange} value={this.state.title}></input>
          <br></br>
          <label>Edit Post Content</label>
          <br></br>
          <textarea rows="5" cols="60" name="content" onChange={this.handleOnChange} value={this.state.content}></textarea>

          <br></br>
          <button variant="outline-primary" type="submit">Edit Post</button>
        </form>

        <h6>
          {this.props.userPosts.length !== 0 ? (`Your Post is successfully Published`) : `Hi ${this.props.user.username}, Please Submit after editing your Post`}
        </h6>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userPosts: state.postReducer.userPosts,
    user: state.currentUserReducer.user
  }
}

export default connect(mapStateToProps, {postUpload, currentUserFetch})(PostEdit)
