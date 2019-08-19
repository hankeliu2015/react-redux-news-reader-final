import { combineReducers} from 'redux';
import commentReducer from './commentReducer';
import storyReducer from './storyReducer';

export default combineReducers({
  commentReducer, storyReducer
})
