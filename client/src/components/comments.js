import React, { Component } from 'react';

class Comments extends Component {

  render(){

    return (
      <div>
        <h4>Comments - current user and other users's comment(s) fetched from Database</h4>
        <ul>
          {this.props.displayComments}
        </ul>
      </div>
    )
  }
}

export default Comments
