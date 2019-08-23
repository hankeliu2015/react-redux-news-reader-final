import React from 'react';

export default function postList(props) {

    return (
      <div>

      <h6>
        {props.userPosts.length !== 0 ? ("Your Post is successfully Published" + props.userPosts) : "Please click on Submit to Publish your Post"}
      </h6>

      <h5>Please check other authors published story:</h5>
      {props.loading ? "...Posts Loading" : props.posts}

      </div>
    )
}
