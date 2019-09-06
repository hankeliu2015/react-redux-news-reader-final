export default function likeVoteReducer(state={vote: 0, likes: [], loading: false}, action) {
  switch(action.type) {

    case 'UPLOADING_VOTE':
      return {...state, loading:true};

    case 'ADDING_VOTE':
      return {...state, vote: state.vote + 1, loading: false}

    case 'LOADING_VOTE':
      return {...state, loading:true};

    case 'FETCHING_VOTE':
    // debugger
      return {...state, likes: [...state.likes, action.payload], loading: false}

    default:
      return state;
  }
}
