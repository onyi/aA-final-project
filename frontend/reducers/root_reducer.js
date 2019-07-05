import {combineReducers} from 'redux';

import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';
import notificationReducer from './notification_reducer';
import uiReducer from './ui_reducer';

const rootReducer = combineReducers({
  errors: errorsReducer,
  session: sessionReducer,
  entities: entitiesReducer,
  notifications: notificationReducer,
  ui: uiReducer
});

export default rootReducer;