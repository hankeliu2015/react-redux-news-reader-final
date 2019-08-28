export function fetchStories() {
  return (dispatch) => {
    dispatch({type: 'LOADING_STORIES'});
    return (
      fetch('https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty')
      .then(response => response.json())
      .then(storyIds => {
        storyIds.map(function(id) {
          return (
            fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
            .then(response => response.json())
            .then(story => {
              dispatch({type: 'FETCHING_STORIES', payload: story})
              })
          )
        })
      })
    )
  }
}
