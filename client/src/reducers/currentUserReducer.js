export default function currentUserReducer(state={user: [], loading: false}, action) {
  switch(action.type) {

    case 'LOADING_USER':
      return {...state, loading: true};

    case 'FETCHING_USER':
      return {user: action.payload, loading: false}
    default:
      return state;
  }
}
