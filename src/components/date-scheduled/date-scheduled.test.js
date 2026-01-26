import React from 'react';
import { render } from '@testing-library/react';
import { DateScheduledDom } from './date-scheduled';

test('renders date selected text', () => {
  const dateSelected = 'date-selected-test';
  const renderScheduleClass = 'card-schedule';
  const showTimeClass = 'card-body card-muted';
  const timeSelected = 'Please select';
  const { getByText } = render(
    <DateScheduledDom
      dateSelected={dateSelected}
      renderScheduleClass={renderScheduleClass}
      showTimeClass={showTimeClass}
      timeSelected={timeSelected}
    />
  );
  const chosenDate = getByText(dateSelected);

  expect(chosenDate).toBeInTheDocument();
});

test('renders time selected text', () => {
  const dateSelected = 'January 1, 2025';
  const renderScheduleClass = 'card-schedule animate-schedule';
  const showTimeClass = 'card-body card-muted show-time';
  const timeSelected = '2:30 pm';
  const { getByText } = render(
    <DateScheduledDom
      dateSelected={dateSelected}
      renderScheduleClass={renderScheduleClass}
      showTimeClass={showTimeClass}
      timeSelected={timeSelected}
    />
  );
  const chosenTime = getByText(timeSelected);

  expect(chosenTime).toBeInTheDocument();
});

test('applies animate-schedule class when date is selected', () => {
  const dateSelected = 'January 1, 2025';
  const renderScheduleClass = 'card-schedule animate-schedule';
  const showTimeClass = 'card-body card-muted';
  const timeSelected = 'Please select';
  const { container } = render(
    <DateScheduledDom
      dateSelected={dateSelected}
      renderScheduleClass={renderScheduleClass}
      showTimeClass={showTimeClass}
      timeSelected={timeSelected}
    />
  );

  expect(container.firstChild).toHaveClass('animate-schedule');
});
