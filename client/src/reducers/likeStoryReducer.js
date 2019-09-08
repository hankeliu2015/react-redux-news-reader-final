export default function likeStoryReducer(state={vote: 0, allLikes: [], loading: false}, action) {
  switch(action.type) {

    case 'UPLOADING_VOTE':
      return {...state, loading:true};

    case 'ADDING_VOTE':
      return {...state, vote: state.vote + 1, loading: false}

    case 'FETCHING_AllLIKES':
    return {...state, allLikes: action.payload, loading: false}

    // return {...state, allLikes: {...state.allLikes, action.payload.item_id: action.payload}, loading: false}

    default:
      return state;
  }
}
