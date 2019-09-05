import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { likeVote } from '../actions/likeVoteAction';
import { connect } from 'react-redux';

class StoryCard extends Component{
  state = {
    rating: 0
  }

  handleOnClick = event => {
    event.preventDefault();
    this.setState({
      rating: this.state.rating +1
    })
  }

  render () {
    return (
      <div>
        <Card body>
            <Link to={`${this.props.story ? "/comments/" + this.props.story.id : 'stories'}`}> {this.props.story ? this.props.story.title : "This Story is missing"}</Link>

            <Button variant="light">
              Likes: {this.state.rating}
            </Button>

            <Button variant="light">
              <form onSubmit = {this.handleOnClick}>
                <button type="submit">Vote</button>
              </form>
            </Button>

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
