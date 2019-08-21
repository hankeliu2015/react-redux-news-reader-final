export default function fetchPosts() {
  return dispatch => {
    dispatch({type: 'FETCHING_POSTS'});
    return (
      fetch('http://localhost:3000/api/v1/posts')
      .then(resq => resq.json())
      .then(posts => dispatch({type: 'LOADING_POSTS', payload: posts }))
      .catch(function(error) {console.log('There has been a problem with your psots fetch operation:', error.message)})
    )
  }
}
