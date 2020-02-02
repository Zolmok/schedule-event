
import { cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';

import {DemoCompleteDom} from './demo-complete';

describe('DemoComplete', () => {
  afterEach(cleanup);

  test('renders date passed in', () => {
    const dateSelected = 'demo-date';
    const {queryByText} = render(<DemoCompleteDom dateSelected={dateSelected} />);
    const dateText = queryByText(dateSelected);

    expect(dateText).toBeInTheDocument();
  });

  test('renders time passed in', () => {
    const timeSelected = 'demo-time';
    const {queryByText} = render(<DemoCompleteDom timeSelected={timeSelected} />);
    const timeText = queryByText(timeSelected);

    expect(timeText).toBeInTheDocument();
  });

  test.skip('fires callback when home link clicked', () => {
    //  Error: Not implemented: HTMLFormElement.prototype.submit
    // Seems to want to fire a form submit event, I just want to test
    // the button click event, but it doesn't seem to fire.  Can't figure
    // this out :(
    const onHome = jest.fn();
    const {getByTestId} = render(<DemoCompleteDom onHome={onHome} />);
    const node = getByTestId('home');

    fireEvent(
      node,
      new MouseEvent('click', {bubbles: true, cancelable: true})
    );

    expect(onHome.mock.calls.length).toBe(1);
  });
});
