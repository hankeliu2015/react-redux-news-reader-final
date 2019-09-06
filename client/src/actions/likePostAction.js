export function likePost(postId, votes, valueCSRF) {

  return dispatch => {
    dispatch({type: 'UPLOADING_POSTLIKE'});
    return (
      fetch(`http://localhost:3000/api/v1/posts/${postId}`, {

      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-CSRF-Token': valueCSRF
      },
      body: JSON.stringify(votes),
      // credentials: 'same-origin'  //might not need this.

      })
      .then(resp => resp.json())
      .then(vote => {
        dispatch({type:'ADDING_POSTLIKE', payload: vote})
      })
      .catch(function(error) {console.log('There has been a problem with your fetch POST operation: ', error.message);})

    )
  }
}
