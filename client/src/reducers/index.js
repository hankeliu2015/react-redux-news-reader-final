import { combineReducers} from 'redux';
import commentReducer from './commentReducer';
import storyReducer from './storyReducer';
import postReducer from './postReducer';
import currentUserReducer from './currentUserReducer';
import likeStoryReducer from './likeStoryReducer';
import likePostReducer from './likePostReducer';

export default combineReducers({
  commentReducer, storyReducer, postReducer, currentUserReducer, likeStoryReducer, likePostReducer
})
