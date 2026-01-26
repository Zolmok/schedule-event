import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TimePickerDom } from './time-picker';

test('renders time options', () => {
  const halfHours = ['12:00 am', '12:30 am', '1:00 am'];
  const onTimeClick = jest.fn();
  const { getByText } = render(
    <TimePickerDom halfHours={halfHours} onTimeClick={onTimeClick} />
  );

  expect(getByText('12:00 am')).toBeInTheDocument();
  expect(getByText('12:30 am')).toBeInTheDocument();
  expect(getByText('1:00 am')).toBeInTheDocument();
});

test('calls onTimeClick when time is clicked', () => {
  const halfHours = ['12:00 am', '12:30 am'];
  const onTimeClick = jest.fn();
  const { getByText } = render(
    <TimePickerDom halfHours={halfHours} onTimeClick={onTimeClick} />
  );

  fireEvent.click(getByText('12:30 am'));

  expect(onTimeClick).toHaveBeenCalled();
});

test('renders all time options with correct tabIndex', () => {
  const halfHours = ['12:00 am', '12:30 am'];
  const onTimeClick = jest.fn();
  const { getAllByRole } = render(
    <TimePickerDom halfHours={halfHours} onTimeClick={onTimeClick} />
  );
  const listItems = getAllByRole('listitem');

  listItems.forEach((item) => {
    expect(item).toHaveAttribute('tabIndex', '0');
  });
});
