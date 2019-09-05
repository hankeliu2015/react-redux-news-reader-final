import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { likeVote } from '../actions/likeVoteAction';
import { fetchLike } from '../actions/likeFetchAction';
import { connect } from 'react-redux';

class StoryCard extends Component{

  state = {
    vote: 1,
    item_id: this.props.story.id
  }

  componentDidMount() {
    this.props.fetchLike(this.props.story.id);
  }

  handleOnClick = event => {
    event.preventDefault();
    let valueCSRF = document.querySelector('meta[name="csrf-token"]').content;

    this.setState({
      vote: this.state.vote +1,
      // item_id: this.props.story.id
    })

    this.props.likeVote(this.state, valueCSRF)
  }

  render () {
    return (
      <div>
        <Card body>
            <Link to={`${this.props.story ? "/comments/" + this.props.story.id : 'stories'}`}> {this.props.story ? this.props.story.title : "This Story is missing"}</Link>

            <Button variant="light">
              Likes: {this.props.vote}
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

export default connect(mapStateToProps, {likeVote, fetchLike})(StoryCard)
