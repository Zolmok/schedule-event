import {updateDate, updateTime} from './date-scheduled';

test('should set date', () => {
  const testDate = 'test-date';

  expect(updateDate(testDate)).toEqual({
    'selection': 'test-date',
    'type': 'UPDATE_DATE'
  });
});

test('should set time', () => {
  const testTime = 'test-time';

  expect(updateTime(testTime)).toEqual({
    'selection': 'test-time',
    'type': 'UPDATE_TIME'
  });
});
