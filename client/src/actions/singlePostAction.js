export function fetchSinglePost(postId) {
  return (dispatch) => {
    dispatch({type: 'LOADING_SINGLE_POST'});
    return (
      fetch(`http://localhost/api/v1/posts/:id`)
      .then(resp => resp.json())
      .then(post => {
        dispatch({type: 'FETCH_SINGLE_POST', payload: post})
      })
    )
  }
}
