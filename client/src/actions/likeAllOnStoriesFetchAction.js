export function likeAllOnStoriesFetch(itemId) {

  return dispatch => {
    dispatch({type: 'UPLOADING_VOTE'});
    return (
      fetch(`/likes`)
      .then(resp => resp.json())
      .then(likes => {
        dispatch({type:'FETCHING_AllLIKES', payload: likes
      })})
      .catch(function(error) {console.log('There has been a problem with your fetch GET operation: ', error.message);})
    )
  }
}
