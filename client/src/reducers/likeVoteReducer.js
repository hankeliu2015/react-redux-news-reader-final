export default function likeVoteReducer(state={vote: 0, like: 0, loading: false}, action) {
  switch(action.type) {

    case 'UPLOADING_VOTE':
      return {...state, loading:true};

    case 'ADDING_VOTE':
      return {vote: state.vote + 1, loading: false}

    case 'LOADING_VOTE':
      return {...state, loading:true};

    case 'FETCHING_VOTE':
      return {like: action.payload, loading: false}

    default:
      return state;
  }
}
