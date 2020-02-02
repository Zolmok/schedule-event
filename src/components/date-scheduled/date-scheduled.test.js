import React from 'react';
import {render} from '@testing-library/react';
import {DateScheduledDom} from './date-scheduled';

test('renders date selected demo text', () => {
  const dateSelected = 'date-selected-test';
  const renderSchedule = {get: jest.fn()};
  const showTime = {get: jest.fn()};
  const {getByText} = render(<DateScheduledDom dateSelected={dateSelected}
                                               renderSchedule={renderSchedule}
                                               showTime={showTime} />);
  const chosenTime = getByText(dateSelected);

  expect(chosenTime).toBeInTheDocument();
});
