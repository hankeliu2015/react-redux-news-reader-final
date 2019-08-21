import React, { Component } from 'react';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import { connect } from 'react-redux';
import fetchPosts from '../actions/postsFetchAction'

class Posts extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {

    const userPosts = this.props.userPosts.map((post, index) => <li key={post.id}>{post.content} Created at: {post.created_at}</li>)

    const posts = this.props.posts.map((post, index) => <li key={post.id}>{post.content} Created at: {post.created_at}</li>)

    return (
      <div>
        <PostForm />
        <PostList posts={posts} userPosts={userPosts} loading={this.props.loading} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userPosts: state.storyReducer.userPosts,
    posts: state.storyReducer.posts,
    loading: state.storyReducer.loading
  }
}

export default connect(mapStateToProps, {fetchPosts})(Posts)
