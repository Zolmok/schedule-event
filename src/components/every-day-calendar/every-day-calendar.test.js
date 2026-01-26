import React from 'react';
import { render } from '@testing-library/react';
import { EveryDayCalendarDom } from './every-day-calendar';

test('renders every-day calendar demo text', () => {
  const testText = 'Select date and time';
  const handleDayClick = jest.fn();
  const monday = 1;
  const { getByText } = render(
    <EveryDayCalendarDom handleDayClick={handleDayClick} monday={monday} />
  );

  const textInDom = getByText(testText);

  expect(textInDom).toBeInTheDocument();
});
