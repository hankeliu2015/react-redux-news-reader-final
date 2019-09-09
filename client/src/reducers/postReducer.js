export default function postReducer(state={userPosts: [], posts: [], singlePost: [], loading:false}, action) {
  switch(action.type) {

    case 'LOADING_POST':
      return {...state, loading:true};

    case 'ADDING_POST':
      return {...state, userPosts: [...state.userPosts, action.payload], loading:false};

    case 'LOADING_POSTS':
      return {...state, loading:true};

    case 'FETCHING_POSTS':
      return {...state, posts: action.payload, loading: false};

    case 'LOADING_SINGLE_POST':
      return {...state, loading:true}

    case 'FETCH_SINGLE_POST':
      return {...state, singlePost: action.payload, loading: false}

    case 'LOADING_DELETEPOST':
      return {...state, loading:true};

    case 'DELETING_POST':
      return {...state, posts: state.posts.filter(post => post.id !== action.payload), loading:false};

    case 'UPLOADING_POSTLIKE':
      return {...state, loading:true};

    case 'FETCHING_POSTLIKE':
      // debugger
      return {...state, posts: state.posts.map(post => post.id === action.payload.id ? action.payload : post), loading:false};

    default:
      return state;
  }
}
