import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { likePost } from '../actions/likePostAction';
import { deletePost } from '../actions/postDeleteAction';

class PostCard extends Component{
  state = {
      vote: 0,
      id: this.props.post.id
    }

  handleOnClick = event => {
    event.preventDefault();
    let valueCSRF = document.querySelector('meta[name="csrf-token"]').content;

    this.setState({
      vote: this.state.vote + 1,
    })
    let voteValue = {vote: 1, id: this.props.post.id}
    this.props.likePost(this.props.post.id, voteValue, valueCSRF);
  }

  handleOnClickDownVote = event => {
    event.preventDefault();
    let valueCSRF = document.querySelector('meta[name="csrf-token"]').content;

    if (this.props.likes === 0) {
      this.setState({
        vote: 0,
      })
    } else {
      this.setState({
        vote: this.state.vote - 1,
      })
    }
    let voteValue = {vote: -1, id: this.props.post.id}
    this.props.likePost(this.props.post.id, voteValue, valueCSRF);
  }

  handleOnClickDelete = event => {
    event.preventDefault();
    let valueCSRF = document.querySelector('meta[name="csrf-token"]').content;

    this.props.deletePost(this.state.id, valueCSRF);
  }

  render() {

    return (
        <Card body border="light">
          <Card.Header>
            Created at: {this.props.dateString}; By: {this.props.post.user.username};
          </Card.Header>
          <Card.Title>{this.props.post.title}</Card.Title>
          <Card.Text>{this.props.post.content}</Card.Text>

        <Button variant="light">
            <Link to={`${this.props.post ? "/postcomments/" + this.props.post.id : 'posts'}`}>
              {this.props.post ? "Add Comments" : "This Post is missing"}
            </Link>
          </Button>

          <Button variant="light">
            <form onSubmit = {this.handleOnClick}>
              <input type="submit" value="upVote"/>
            </form>
          </Button>

          <Button variant="light">
            <form onSubmit = {this.handleOnClickDownVote}>
              <input type="submit" value="downVote"/>
            </form>
          </Button>

          <Button variant="light">
            Likes: {(this.props.post.like + this.state.vote) < 0 ? 0 : (this.props.post.like + this.state.vote)}
          </Button>

          <Button variant="light">
            <form onSubmit = {this.handleOnClickDelete}>
              <input type="submit" value="Delete Post"/>
            </form>
          </Button>
        </Card>
    )
  }
}

const mapStateToProps = state => {
  return {
    likes: state.likePostReducer.likes
  }
}

export default connect(mapStateToProps, {likePost, deletePost})(PostCard);
