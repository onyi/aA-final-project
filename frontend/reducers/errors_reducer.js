import {combineReducers} from 'redux';

import sessionErrorReducer from './session_errors_reducer';
import userErrorReducer from './user_errors_reducer';

export default combineReducers({
  session: sessionErrorReducer,
  user: userErrorReducer
})