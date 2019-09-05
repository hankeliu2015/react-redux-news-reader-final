export default function likeVoteReducer(state={vote: [], loading: false}, action) {
  switch(action.type) {

    case 'UPLOADING_VOTE':
      return {...state, loading:true};

    case 'ADDING_VOTE':
      return {vote: [...state.vote, action.payload], loading: false}

    default:
      return state;
  }
}
