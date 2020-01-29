import {faArrowLeft, faClock} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useSelector} from 'react-redux';

import React, {useState} from "react";

import ContactForm from '../contact-form/contact-form';
import DateScheduled from '../date-scheduled/date-scheduled';
import DemoComplete from '../demo-complete/demo-complete';
import EveryDayCalendar from '../every-day-calendar/every-day-calendar';
import TimePicker from '../time-picker/time-picker';

import "./schedule-wizard.css";

function handleOnSubmit(event, currentStep) {
  event.preventDefault();

  if (currentStep === 3) {
    console.log('send-email');    
  }
}

function onNext(currentStep, setCurrentStep) {
  if (currentStep > 2) {
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

function ScheduleWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const onNextCurried = () => onNext(currentStep, setCurrentStep);
  const onPreviousCurried = () => onPrevious(currentStep, setCurrentStep);
  const handleOnSubmitCurried = (event) => handleOnSubmit(event, currentStep);

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

  let currentForm = (
    <form onSubmit={handleOnSubmitCurried}>
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
                onClick={onPreviousCurried}><FontAwesomeIcon icon={faArrowLeft} /> Back</button>
        <button className="primary"
                disabled={nextButtonDisabled}
                onClick={onNextCurried}
                tabIndex="15">Next Step</button>
      </div>
    </form>
  );

  if (currentStep === 3) {
    currentForm = <DemoComplete setCurrentStep={setCurrentStep} />;
  }

  return currentForm;
}

export default ScheduleWizard;
