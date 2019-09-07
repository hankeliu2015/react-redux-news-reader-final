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
  // commnets out avoid warning messages
  // componentDidMount() {
  //   this.props.fetchLike(this.props.story.id);
  // }

  handleOnClick = event => {
    event.preventDefault();
    let valueCSRF = document.querySelector('meta[name="csrf-token"]').content;

    this.setState({
      vote: this.state.vote +1,
    })

    this.props.likeVote(this.state, valueCSRF);
    // this.props.fetchLike(this.props.story.id)
  }

  render () {

    let currentStoryId = this.props.story.id
    let currentItemLike = this.props.likes.filter(like => {
      // debugger
      currentStoryId === parseInt(like.item_id)
      })
// debugger
    return (
      <div>
        <Card body>
            <Link to={`${this.props.story ? "/comments/" + this.props.story.id : 'stories'}`}> {this.props.story ? this.props.story.title : "This Story is missing"}</Link>

            <Button variant="light">
              Likes: 0
              {/* {currentItemLike[0] ? currentItemLike[0].vote : 0 } */}
            </Button>

            <Button variant="light">
              <form onSubmit = {this.handleOnClick}>
                <input type="submit" value = "Vote"/>
              </form>
            </Button>

        </Card>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    vote: state.likeVoteReducer.vote,
    likes: state.likeVoteReducer.likes
  }
}

export default connect(mapStateToProps, {likeVote, fetchLike})(StoryCard)
