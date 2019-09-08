// export function fetchLike(itemId) {
//
//   return dispatch => {
//     dispatch({type: 'LOADING_VOTE'});
//     return (
//       fetch(`http://localhost:3000/likes/${itemId}`)
//       .then(resp => resp.json())
//       .then(like => {
//         // debugger
//         dispatch({type:'FETCHING_VOTE', payload: like
//       })})
//       // .catch(function(error) {console.log('There has been a problem with your fetch GET operation: ', error.message);})
//
//     )
//   }
// }
