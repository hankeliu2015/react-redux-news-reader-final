import React from 'react';

export default function postList(props) {

    return (
      <div>
        <h4>Your story is successfully published:</h4>
        {props.userPosts}

        <h5>Please check other authors published story:</h5>
        {props.posts}

      </div>
    )
}
