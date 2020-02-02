import React from 'react';
import {render} from '@testing-library/react';
import {EveryDayCalendarDom} from './every-day-calendar';

test('renders every-day calendar demo text', () => {
  const testText = 'Select date and time';
  const {getByText} = render(<EveryDayCalendarDom />);
                              
  const textInDom = getByText(testText);

  expect(textInDom).toBeInTheDocument();
});
