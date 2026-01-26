import { cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';
import { vi } from 'vitest';

import { DemoCompleteDom } from './demo-complete';

describe('DemoComplete', () => {
  afterEach(cleanup);

  const defaultProps = {
    dateSelected: 'January 1, 2025',
    onHome: vi.fn(),
    onEmail: vi.fn(),
    timeSelected: '2:30 pm',
    yourEmail: 'test@example.com',
  };

  test('renders date passed in', () => {
    const { queryByText } = render(<DemoCompleteDom {...defaultProps} />);
    const dateText = queryByText(defaultProps.dateSelected);

    expect(dateText).toBeInTheDocument();
  });

  test('renders time passed in', () => {
    const { queryByText } = render(<DemoCompleteDom {...defaultProps} />);
    const timeText = queryByText(defaultProps.timeSelected);

    expect(timeText).toBeInTheDocument();
  });

  test('renders email passed in', () => {
    const { queryByText } = render(<DemoCompleteDom {...defaultProps} />);

    expect(queryByText(/test@example.com/)).toBeInTheDocument();
  });

  test('fires callback when home button clicked', () => {
    const onHome = vi.fn();
    const { getByTestId } = render(
      <DemoCompleteDom {...defaultProps} onHome={onHome} />
    );
    const node = getByTestId('home');

    fireEvent.click(node);

    expect(onHome).toHaveBeenCalledTimes(1);
  });

  test('fires callback when resend email button clicked', () => {
    const onEmail = vi.fn();
    const { getByText } = render(
      <DemoCompleteDom {...defaultProps} onEmail={onEmail} />
    );
    const node = getByText('Resend Email');

    fireEvent.click(node);

    expect(onEmail).toHaveBeenCalledTimes(1);
  });
});
