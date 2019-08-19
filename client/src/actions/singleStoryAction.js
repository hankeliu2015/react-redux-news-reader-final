export function fetchSingleStory(storyId) {
  return (dispatch) => {
    dispatch({type: 'LOADING_SINGLE_STORY'});
    return (
      fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`)
      .then(resp => resp.json())
      .then(story => {
        dispatch({type: 'FETCH_SINGLE_STORY', payload: story})
      })
    )
  }
}
