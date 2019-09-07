export default function likePostReducer(state={likes: [], loading: false}, action) {
  switch(action.type) {

    case 'UPLOADING_POSTLIKE':
      return {...state, loading:true};

    case 'FETCHING_POSTLIKE':
      return {...state, likes: action.payload, loading: false}

    default:
      return state;
  }
}
