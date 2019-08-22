import React from 'react';

export default function commentList(props)  {
    return (
      <div>
        <h4>Comments - current user and other users's comment(s) fetched from Database</h4>
        <ul>
          {props.displayComments}
        </ul>
      </div>
    )
}
