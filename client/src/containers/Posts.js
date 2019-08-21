import React, { Component } from 'react';
import postForm from '../components/PostForm';
import PostList from '../components/PostList';
import { connect } from 'react-redux';
import fetchPosts from '../actions/postsFetchAction'

class Posts extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const userPosts = this.props.userPosts.map((post, index) => <li key={post.id}>{post.content} Created at: {post.created_at}</li>)

    const posts = this.props.posts.map((posts, index) => <li key={post.id}>{post.content} Created at: {post.created_at}</li>)

    return (
      <div>
          <postForm />
          <PostList userPosts={userPosts} posts={posts} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userPosts: state.postReducer.userPosts,
    posts: state.postReducer.posts
  }
}

export default connect(mapStateToProps, {fetchPosts})(Posts)
