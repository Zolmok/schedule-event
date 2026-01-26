// Reusable selectors for date-scheduled state
export const selectDate = (state) => state.dateScheduledReducer.schedule.date;
export const selectTime = (state) => state.dateScheduledReducer.schedule.time;
export const selectTimeWithDefault = (state) =>
  state.dateScheduledReducer.schedule.time || 'Please select';
