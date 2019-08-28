import React from 'react';

export default function commentList(props)  {
    return (
      <div>
        <h4>Comments - Current User and other users</h4>
        <ul>
          {props.displayComments}
        </ul>
      </div>
    )
}
