export default function fetchComments() {
  return dispatch => {
    dispatch({type: 'FETCHING_COMMENTS'});
    return (
      fetch('http://localhost:3001/comments')
        .then(resp => resp.json())
        .then(comments => dispatch({type: 'LOADING_COMMENTS', payload: comments}))
        .catch(function(error) {console.log('There has been a problem with your fetch GET operation: ', error.message);})
    )
  }
}
