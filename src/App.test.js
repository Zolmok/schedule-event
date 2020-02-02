import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders schedule demo text', () => {
  const { getByText } = render(<App />);
  const scheduleDemo = getByText(/schedule a demo/i);

  expect(scheduleDemo).toBeInTheDocument();
});
