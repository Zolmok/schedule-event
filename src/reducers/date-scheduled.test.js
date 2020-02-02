import {UPDATE_DATE, UPDATE_TIME} from '../actions/date-scheduled';
import reducer from './date-scheduled';

describe('date-scheduled reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      schedule: {
        date: '',
        time: ''
      }
    });
  });

  it('should handle UPDATE_DATE', () => {
    const testDate = 'test-date';
    expect(
      reducer({schedule: {date: '', time: ''}}, {
        type: UPDATE_DATE,
        selection: testDate
      })).toEqual({
        'schedule': {
          date: testDate,
          time: ''
        }
      });
  });

  it('should handle UPDATE_TIME', () => {
    const testTime = 'test-time';
    expect(
      reducer({schedule: {date: '', time: ''}}, {
        type: UPDATE_TIME,
        selection: testTime
      })).toEqual({
        'schedule': {
          date: '',
          time: testTime
        }
      });
  });
});
