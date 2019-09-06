export function fetchLikePost(postId) {

  return dispatch => {
    dispatch({type: 'DOWNLOADING_POSTLIKE'});
    return (
      fetch(`http://localhost:3000/likes/${postId}`)
      .then(resp => resp.json())
      .then(post => {
        debugger
        dispatch({type:'FETCHING_POSTLIKE', payload: post.like
      })})
      // .catch(function(error) {console.log('There has been a problem with your fetch GET operation: ', error.message);})

    )
  }
}
