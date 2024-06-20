import { combineReducers } from 'redux';
import dateScheduledReducer from './date-scheduled';

const rootReducer = combineReducers({
  dateScheduledReducer,
});

export default rootReducer;
