export default function storyReducer(state={stories: [], singleStory: [], loading: false}, action) {
  switch(action.type) {

    case 'LOADING_STORIES':
      return {...state, loading:true};

    case 'FETCHING_STORIES':
      return {...state, stories: [...state.stories, action.payload], loading: false};

    case 'LOADING_SINGLE_STORY':
      return {...state, loading:true}

    case 'FETCH_SINGLE_STORY':
      return {...state, singleStory: action.payload, loading: false}

    default:
      return state;
  }
}
