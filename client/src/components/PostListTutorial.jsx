import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class PostListTutorial extends Component {

  state = {
    posts: []
  }

  componentDidMount() {
    fetch('/api/v1/posts')
      .then(posts => posts.json())
      .then(posts => {
        this.setState({
          posts: posts
        })
      })
  }

  renderPosts = () => {
    return this.state.posts.map(post => {
      return (
        <div key={post.id}>
          {post.title} - {post.content}
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        PostList Component test
        {this.renderPosts()}
        <hr></hr>
        <Link to="/posts/new">Add a New Post</Link>
      </div>
    )
  }
}

export default PostListTutorial
