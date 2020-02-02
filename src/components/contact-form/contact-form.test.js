import React from 'react';
import { cleanup, render } from '@testing-library/react';
import ContactForm from './contact-form';

afterEach(cleanup);

test('renders schedule demo text', () => {
  const { queryByLabelText } = render(<ContactForm />);
  const yourName = queryByLabelText(/Your name/i);
  const yourEmail = queryByLabelText(/Your e-mail address/i);
  const phoneNumber = queryByLabelText(/Phone number/i);

  expect(yourName).toBeInTheDocument();
  expect(yourEmail).toBeInTheDocument();
  expect(phoneNumber).toBeInTheDocument();
});
