import { combineReducers} from 'redux';
import commentReducer from './commentReducer';
import storyReducer from './storyReducer';
import postReducer from './postReducer';
import currentUserReducer from './currentUserReducer';

export default combineReducers({
  commentReducer, storyReducer, postReducer, currentUserReducer, likeVoteReducer
})
