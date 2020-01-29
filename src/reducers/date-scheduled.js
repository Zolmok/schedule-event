
import {UPDATE_DATE, UPDATE_TIME} from '../actions/date-scheduled';

const initialState = {
  'schedule': {
    'date': '',
    'time': ''
  }
};

function dateScheduledReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_DATE:
      return Object.assign(state, {
        'schedule': {
          'date': action.selection,
          'time': state.schedule.time
        }
      });
    case UPDATE_TIME:
      return Object.assign(state, {
        'schedule': {
          'date': state.schedule.date,
          'time': action.selection
        }
      });

    default:
      return state;
    }
}

export default dateScheduledReducer;
