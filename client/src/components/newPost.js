import React, {Component} from 'react';
import { connect } from 'react-redux'
import { postUpload } from '../actions/postCreateAction';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form'


class NewPost extends Component {
  state = {
    content: '',
    title: ''
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    let valueCSRF = document.querySelector('meta[name="csrf-token"]').content;
    this.props.postUpload(this.state, valueCSRF);

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <h5>Your Post Title</h5>
          <input type="text" name="title" onChange={this.handleOnChange} value={this.state.title}></input>
          <br></br>
          <label>Post Content</label>
          <br></br>
          <textarea rows="5" cols="60" name="content" onChange={this.handleOnChange} value={this.state.content}></textarea>

          <br></br>
          <button variant="outline-primary" type="submit">Submit</button>
        </form>

      </div>
    )
  }
}

export default connect(null, {postUpload})(NewPost)
