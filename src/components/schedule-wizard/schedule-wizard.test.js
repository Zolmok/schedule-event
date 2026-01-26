import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ScheduleWizardDom } from './schedule-wizard';

test('renders schedule demo text', () => {
  const dateScheduledComponent = 'date-scheduled-test';
  const DateScheduled = () => dateScheduledComponent; // stub this out because it depends on redux
  const DemoComplete = () => []; // stub this out because it depends on redux
  const { getByText } = render(
    <ScheduleWizardDom DateScheduled={DateScheduled} DemoComplete={DemoComplete} />
  );
  const scheduleDemo = getByText(dateScheduledComponent);

  expect(scheduleDemo).toBeInTheDocument();
});

test('renders demo complete component', () => {
  const demoCompleteComponent = 'demo-complete-test';
  const DateScheduled = () => []; // stub this out because it depends on redux
  const DemoComplete = () => demoCompleteComponent; // stub this out because it depends on redux
  const { getByText } = render(
    <ScheduleWizardDom
      DateScheduled={DateScheduled}
      DemoComplete={DemoComplete}
      currentStep={3}
    />
  );
  const scheduleDemo = getByText(demoCompleteComponent);

  expect(scheduleDemo).toBeInTheDocument();
});

test('fires callback when onNext button clicked', () => {
  const onNext = jest.fn();
  const DateScheduled = () => []; // stub this out because it depends on redux
  const DemoComplete = () => []; // stub this out because it depends on redux
  const { getByTestId } = render(
    <ScheduleWizardDom
      DateScheduled={DateScheduled}
      DemoComplete={DemoComplete}
      onNext={onNext}
    />
  );
  const node = getByTestId('on-next');

  fireEvent.click(node);

  expect(onNext.mock.calls.length).toBe(1);
});
