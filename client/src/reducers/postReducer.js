export default function postReducer(state={userPosts: [], posts: [], loading:false}, action) {
  switch(action.type) {
    
    case 'LOADING_POST':
      return {...state, loading:true};

    case 'ADDING_POST':   // will show it on the page when author is writing. as confirmation the story is published.
      return {...state, userPosts: [...state.userPosts, action.payload], loading:false};

    case 'FETCHING_POSTS':  //might have the fetching and loading opposite
      return {...state, loading:true};

    case 'LOADING_POSTS':   //will show them on homepage to let other authors read
      return {...state, posts: action.payload, loading: false};

    default:
      return state;
  }
}
