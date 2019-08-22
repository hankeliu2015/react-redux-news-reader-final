import { combineReducers} from 'redux';
import commentReducer from './commentReducer';
import storyReducer from './storyReducer';
import postReducer from './postReducer';

export default combineReducers({
  commentReducer, storyReducer, postReducer
})
