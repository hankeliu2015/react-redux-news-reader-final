export function postUpload(postData, valueCSRF) {
  return dispatch => {
    dispatch({type: 'LOADING_POST'});
    return (
      fetch('http://localhost:3000/api/v1/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-CSRF-Token': valueCSRF
        },
        body: JSON.stringify(postData),
      })
      .then(resp => resp.json())
      .then(post => {
        dispatch({type: 'ADDING_POST', payload: post})
      })
      .catch(function(error) {console.log('There has been a problem with your fetch POST operation: ', error.message);})
    )
  }
}
