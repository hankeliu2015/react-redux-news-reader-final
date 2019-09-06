import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class PostCard extends Component{
  state = {
      vote: 1,
      post_id: ""
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
            Vote
          </Button>
          <Button variant="light">
            Like: 0
          </Button>
        </Card>
    )
  }
}

export default PostCard;
