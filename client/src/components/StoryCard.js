import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { likeVote } from '../actions/likeVoteAction';
import { connect } from 'react-redux';

class StoryCard extends Component{
  state = {
    vote: 0,
    item_id: this.props.story.id
  }

  handleOnClick = event => {
    event.preventDefault();
    let valueCSRF = document.querySelector('meta[name="csrf-token"]').content;

    this.setState({
      vote: this.state.vote +1,
    })
    this.props.likeVote(this.state, valueCSRF);
  }

  render () {

    let currentStoryId = this.props.story.id

    return (
      <div>
        <Card body>
            <Link to={`${this.props.story ? "/comments/" + this.props.story.id : 'stories'}`}> {this.props.story ? this.props.story.title : "This Story is missing"}</Link>

            <Button variant="light">
              Likes: {this.props.like + this.state.vote}
            </Button>

            <Button variant="light">
              <form onSubmit = {this.handleOnClick}>
                <input type="submit" value = "Vote"/>
              </form>
            </Button>

            {/*
              <Button variant="light">
              ID: {this.props.story.id}
              </Button>
              */}
        </Card>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    vote: state.likeVoteReducer.vote
  }
}

export default connect(mapStateToProps, {likeVote})(StoryCard)
