export function deletePost(postId, postValue, valueCSRF, push) {
  // debugger
  return dispatch => {
    dispatch({type: 'LOADING_DELETEPOST'});
    return (
      fetch(`http://localhost:3000/api/v1/posts/${postId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-CSRF-Token': valueCSRF
        },
        body: JSON.stringify(postValue),
      })
      .then(resp => resp.json())
      .then(post => {
        debugger
        return dispatch({type: 'DELETING_POST', payload: post})
      })
      .then(res => push("/posts"))
      .catch(function(error) {console.log('There has been a problem with your fetch DELETE operation: ', error.message);})
    )
  }
}
