import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import ContactForm from './contact-form';

afterEach(cleanup);

const defaultFormData = { name: '', email: '', phone: '' };

test('renders contact form fields', () => {
  const onFieldChange = vi.fn();
  const { queryByLabelText } = render(
    <ContactForm formData={defaultFormData} onFieldChange={onFieldChange} />
  );
  const yourName = queryByLabelText(/Your name/i);
  const yourEmail = queryByLabelText(/Your e-mail address/i);
  const phoneNumber = queryByLabelText(/Phone number/i);

  expect(yourName).toBeInTheDocument();
  expect(yourEmail).toBeInTheDocument();
  expect(phoneNumber).toBeInTheDocument();
});

test('calls onFieldChange when name input changes', () => {
  const onFieldChange = vi.fn();
  const { getByLabelText } = render(
    <ContactForm formData={defaultFormData} onFieldChange={onFieldChange} />
  );
  const nameInput = getByLabelText(/Your name/i);

  fireEvent.change(nameInput, { target: { value: 'John Doe' } });

  expect(onFieldChange).toHaveBeenCalledWith('name', 'John Doe');
});

test('calls onFieldChange when email input changes', () => {
  const onFieldChange = vi.fn();
  const { getByLabelText } = render(
    <ContactForm formData={defaultFormData} onFieldChange={onFieldChange} />
  );
  const emailInput = getByLabelText(/Your e-mail address/i);

  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

  expect(onFieldChange).toHaveBeenCalledWith('email', 'test@example.com');
});

test('calls onFieldChange when phone input changes', () => {
  const onFieldChange = vi.fn();
  const { getByLabelText } = render(
    <ContactForm formData={defaultFormData} onFieldChange={onFieldChange} />
  );
  const phoneInput = getByLabelText(/Phone number/i);

  fireEvent.change(phoneInput, { target: { value: '555-1234' } });

  expect(onFieldChange).toHaveBeenCalledWith('phone', '555-1234');
});

test('displays controlled values', () => {
  const onFieldChange = vi.fn();
  const formData = { name: 'Jane', email: 'jane@test.com', phone: '555-5678' };
  const { getByLabelText } = render(
    <ContactForm formData={formData} onFieldChange={onFieldChange} />
  );

  expect(getByLabelText(/Your name/i)).toHaveValue('Jane');
  expect(getByLabelText(/Your e-mail address/i)).toHaveValue('jane@test.com');
  expect(getByLabelText(/Phone number/i)).toHaveValue('555-5678');
});
