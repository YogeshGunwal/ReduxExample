
import { combineReducers } from 'redux';
import todo from './todo';
import users from './users';

const rootReducer = combineReducers({
  todo,
  users
});

export default rootReducer;
