export default function likeVoteReducer(state={vote: 0, likes: [], allLikes: [], loading: false}, action) {
  switch(action.type) {

    case 'UPLOADING_VOTE':
      return {...state, loading:true};

    case 'ADDING_VOTE':
      return {...state, vote: state.vote + 1, loading: false}

    case 'LOADING_VOTE':
      return {...state, loading:true};

    case 'FETCHING_VOTE':
      return {...state, likes: [...state.likes, action.payload], loading: false};

      // return {...state, likes: {...state.likes, action.payload.item_id: action.payload}, loading: false}

      case 'FETCHING_AllLIKES':
      return {...state, allLikes: payload.likes, loading: false}

    default:
      return state;
  }
}
