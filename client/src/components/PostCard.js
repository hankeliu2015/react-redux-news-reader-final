import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { likePost } from '../actions/likePostAction';

class PostCard extends Component{
  state = {
      vote: 0,
      id: this.props.post.id
    }

  handleOnClick = event => {
    event.preventDefault();
    let valueCSRF = document.querySelector('meta[name="csrf-token"]').content;

    this.setState({
      vote: this.state.vote +1,
    })

    this.props.likePost(this.props.post.id, this.state, valueCSRF);
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
            <form onSubmit = {this.handleOnClick}>
              <input type="submit" value="downVote"/>
            </form>
          </Button>

          <Button variant="light">
            Likes: {this.props.post.like ? this.props.post.like + this.state.vote : 0}
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

export default connect(mapStateToProps, {likePost})(PostCard);
