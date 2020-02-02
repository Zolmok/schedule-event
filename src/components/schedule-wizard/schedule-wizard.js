import {faArrowLeft, faClock} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useSelector} from 'react-redux';

import React, {useState} from "react";

import {DemoComplete} from '../demo-complete/demo-complete';
import ContactForm from '../contact-form/contact-form';
import {DateScheduled} from '../date-scheduled/date-scheduled';
import {EveryDayCalendar} from '../every-day-calendar/every-day-calendar';
import {TimePicker} from '../time-picker/time-picker';

import "./schedule-wizard.css";

function onNext(params) {
  const {currentStep, setCurrentStep, setYourEmail} = params;

  if (currentStep > 1) {
    if (currentStep === 2) {
      // validate email form
      const fields = document.querySelector('form').elements;
      const invalidFields = [].slice.call(fields).find((field) => {
        if (field.id === 'email') {
          setYourEmail(field.value);
        }

        return field.validity.valid === false;
      });

      if (invalidFields) {
        return; // stay on step 2
      }
    }

    setCurrentStep(3);
  } else {
    setCurrentStep(currentStep + 1);
  }
}

function onPrevious(currentStep, setCurrentStep) {
  if (currentStep <= 1) {
    setCurrentStep(1);
  } else {
    setCurrentStep(currentStep - 1);
  }
}

/**
 * Create a component itself without having to deal with redux for testing.
 * https://redux.js.org/recipes/writing-tests/#components
 * > In order to be able to test the App component itself without having to deal with the decorator,
 * > we recommend you to also export the undecorated component
 */
function ScheduleWizardDom(props) {
  const {
    backButtonDisabled,
    currentRightSide,
    currentStep,
    DateScheduled,
    DemoComplete,
    nextButtonDisabled,
    onNext,
    onPrevious,
    setCurrentStep,
    yourEmail
  } = props;

  let currentForm = (
    <form>
      <div className="container">
        <div className="left">
          <div className="row-left">
            <div className="top">
              <p className="info-heading">Walkthrough</p>
              <p className="heading">Schedule a demo</p>
              <div className="tag-duration">
                <FontAwesomeIcon icon={faClock} /> <span>10-20min</span>
              </div>
            </div>
            <div className="bottom">
              <DateScheduled />
            </div>
          </div>
        </div>
        <div className="right">
          {currentRightSide}
        </div>
      </div>
      <div className="footer">
        <button disabled={backButtonDisabled}
                onClick={onPrevious}
                type="button"><FontAwesomeIcon icon={faArrowLeft} /> Back</button>
        <button className="primary"
                data-testid="on-next"
                disabled={nextButtonDisabled}
                onClick={onNext}
                tabIndex="15"
                type="submit">Next Step</button>
      </div>
    </form>
  );

  if (currentStep === 3) {
    currentForm = <DemoComplete setCurrentStep={setCurrentStep} yourEmail={yourEmail} />;
  }

  return currentForm;
}

function ScheduleWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [yourEmail, setYourEmail] = useState('');
  const onNextCurried = () => onNext({
    currentStep,
    setCurrentStep,
    setYourEmail
  });
  const onPreviousCurried = () => onPrevious(currentStep, setCurrentStep);

  let currentRightSide = [];
  let backButtonDisabled = true;
  let nextButtonDisabled = true;

  switch (currentStep) {
    case 1:
      currentRightSide = (
        <div className="row-right">
          <EveryDayCalendar />
          <TimePicker />
        </div>
      );
      backButtonDisabled = true;
      nextButtonDisabled = true;
      break;
    case 2:
      currentRightSide = (
        <div className="row-right">
          <ContactForm />
        </div>
      );
      backButtonDisabled = false;
      nextButtonDisabled = false;
      break;

    default:
      break;
  }

  const dateSelected = useSelector((state) => {
    return state.dateScheduledReducer.schedule.date;
  });
  const timeSelected = useSelector((state) => {
    return state.dateScheduledReducer.schedule.time;
  });

  if (dateSelected && timeSelected) {
    nextButtonDisabled = false;
  }

  return <ScheduleWizardDom
           backButtonDisabled={backButtonDisabled}
           currentRightSide={currentRightSide}
           currentStep={currentStep}
           DateScheduled={DateScheduled}
           DemoComplete={DemoComplete}
           nextButtonDisabled={nextButtonDisabled}
           onNext={onNextCurried}
           onPrevious={onPreviousCurried}
           setCurrentStep={setCurrentStep}
           yourEmail={yourEmail} />;
}

export {ScheduleWizard, ScheduleWizardDom};
