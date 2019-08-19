export function fetchStories() {
  // debugger
  return (dispatch) => {
    dispatch({type: 'LOADING_STORIES'});
    return (
      fetch('https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty')
      .then(response => response.json())
      .then(storyIds => {
        // debugger
        storyIds.map(function(id) {
          return (
            fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
            .then(response => response.json())
            .then(story => {
               //console.log(story);
              dispatch({type: 'FETCHING_STORIES', payload: story})
              })
          )     //1st return
        })      //storyIds.map
      })        //storyIds =>
    )           //2nd return from above
  }
}
