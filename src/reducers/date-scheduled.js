import { UPDATE_DATE, UPDATE_TIME } from '../actions/date-scheduled';

const initialState = {
  schedule: {
    date: '',
    time: '',
  },
};

function dateScheduledReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_DATE:
      return {
        ...state,
        schedule: {
          ...state.schedule,
          date: action.selection,
        },
      };
    case UPDATE_TIME:
      return {
        ...state,
        schedule: {
          ...state.schedule,
          time: action.selection,
        },
      };
    default:
      return state;
  }
}

export default dateScheduledReducer;
