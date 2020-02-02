import React from 'react';
import {render} from '@testing-library/react';
import {TimePickerDom} from './time-picker';

test('renders schedule demo text', () => {
  const halfHours = '12:00';
  const {getByText} = render(<TimePickerDom halfHours={halfHours} />);
  const chosenTime = getByText(halfHours);

  expect(chosenTime).toBeInTheDocument();
});
