import React from 'react';

export default function postList(props) {
  // <h4>Your story is successfully published:</h4>
  // {props.loading ? "...Posts Loading" : props.userPosts}

    return (
      <div>


        <h5>Please check other authors published story:</h5>
        {props.loading ? "...Posts Loading" : props.posts}

      </div>
    )
}
