import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import {ScheduleWizardDom} from './schedule-wizard';

test('renders schedule demo text', () => {
  const dateScheduledComponent = 'date-scheduled-test';
  const DateScheduled = () => dateScheduledComponent; // stub this out because it depends on redux
  const {getByText} = render(<ScheduleWizardDom DateScheduled={DateScheduled} />);
  const scheduleDemo = getByText(dateScheduledComponent);

  expect(scheduleDemo).toBeInTheDocument();
});

test('renders demo complete component', () => {
  const demoCompleteComponent = 'demo-complete-test';
  const DateScheduled = () => []; // stub this out because it depends on redux
  const DemoComplete = () => demoCompleteComponent; // stub this out because it depends on redux
  const {getByText} = render(<ScheduleWizardDom DateScheduled={DateScheduled}
                                                DemoComplete={DemoComplete}
                                                currentStep={3} />);
  const scheduleDemo = getByText(demoCompleteComponent);

  expect(scheduleDemo).toBeInTheDocument();
});

test.skip('fires callback when onNext link clicked', () => {
  //  Error: Not implemented: HTMLFormElement.prototype.submit
  // Seems to want to fire a form submit event, I just want to test
  // the button click event, but it doesn't seem to fire.  Can't figure
  // this out :(
  const onNext = jest.fn();
  const DateScheduled = () => []; // stub this out because it depends on redux
  const DemoComplete = () => []; // stub this out because it depends on redux
  const {getByTestId} = render(<ScheduleWizardDom DateScheduled={DateScheduled}
                                                  DemoComplete={DemoComplete}
                                                  onNext={onNext} />);
  const node = getByTestId('on-next');

  fireEvent(
    node,
    new MouseEvent('click', {bubbles: true, cancelable: true})
  );

  expect(onNext.mock.calls.length).toBe(1);
});
