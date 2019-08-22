import React, { Component } from 'react';
import NewPost from '../components/NewPost';
import PostList from '../components/postList';
import { connect } from 'react-redux';
import fetchPosts from '../actions/postsFetchAction';
import Card from 'react-bootstrap/Card'

class Posts extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {

    const userPosts = this.props.userPosts.map((post, index) => <li key={post.id}>Title: {post.title}; Content: {post.content} Created at: {post.created_at}</li>)

    const posts = this.props.posts.slice(0).reverse().map((post, index) => {
      let postDate = new Date(post.created_at)
      let dateString = postDate.toDateString()

      return(
        <Card body key={post.id}>
          <Card.Header>{post.title}</Card.Header>
          <Card.Text>{post.content}</Card.Text>
          <Card.Link href="#">Created at: {dateString}; By: {post.user.email}</Card.Link>
        </Card>
      )
    })

    return (
      <div>
        <NewPost />
        <PostList posts={posts} userPosts={userPosts} loading={this.props.loading} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userPosts: state.postReducer.userPosts,
    posts: state.postReducer.posts,
    loading: state.postReducer.loading
  }
}

export default connect(mapStateToProps, {fetchPosts})(Posts)
