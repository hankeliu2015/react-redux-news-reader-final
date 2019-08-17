import React, { Component }               from 'react';

class NewPost extends Component {

  state = {
    title: '',
    content: ''
  }

  handleChange = e => {
    let newValue = e.target.value;
    let key = e.target.name;
    this.setState({
      [key]: newValue
    });
  }

  render() {
    return (
      <form>
        <p>
          <label htmlFor="title">Title: </label>
          <input type="text" name="title" onChange={this.handleChange} />
        </p>
        <p>
          <label htmlFor="content">Content: </label>
          <textarea name="content" id="" cols="30" rows="10" onChange={this.handleChange}></textarea>
        </p>
        <input type="submit" value="Create Post" />
      </form>
    )
  }
}

export default NewPost
