import { ArrowLeft, Clock } from 'lucide-react';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import React, { memo, useState, useCallback } from 'react';

import { DemoComplete } from '../demo-complete/demo-complete';
import ContactForm from '../contact-form/contact-form';
import { DateScheduled } from '../date-scheduled/date-scheduled';
import { EveryDayCalendar } from '../every-day-calendar/every-day-calendar';
import { TimePicker } from '../time-picker/time-picker';
import { selectDate, selectTime } from '../../selectors/date-scheduled';

import './schedule-wizard.css';

/**
 * Create a component itself without having to deal with redux for testing.
 * https://redux.js.org/recipes/writing-tests/#components
 * > In order to be able to test the App component itself without having to deal with the decorator,
 * > we recommend you to also export the undecorated component
 */
const ScheduleWizardDom = memo(function ScheduleWizardDom(props) {
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
    yourEmail,
  } = props;

  let currentForm = (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="container">
        <div className="left">
          <div className="row-left">
            <div className="top">
              <p className="info-heading">Walkthrough</p>
              <p className="heading">Schedule a demo</p>
              <div className="tag-duration">
                <Clock size={14} /> <span>10-20min</span>
              </div>
            </div>
            <div className="bottom">
              <DateScheduled />
            </div>
          </div>
        </div>
        <div className="right">{currentRightSide}</div>
      </div>
      <div className="footer">
        {backButtonDisabled ? (
          <span />
        ) : (
          <button onClick={onPrevious} type="button">
            <ArrowLeft size={14} /> Back
          </button>
        )}
        <button
          className="primary"
          data-testid="on-next"
          disabled={nextButtonDisabled}
          onClick={onNext}
          tabIndex="15"
          type="button"
        >
          Next Step
        </button>
      </div>
    </form>
  );

  if (currentStep === 3) {
    // final step, confirmation screen
    currentForm = <DemoComplete setCurrentStep={setCurrentStep} yourEmail={yourEmail} />;
  }

  return currentForm;
});

ScheduleWizardDom.propTypes = {
  backButtonDisabled: PropTypes.bool,
  currentRightSide: PropTypes.node,
  currentStep: PropTypes.number,
  DateScheduled: PropTypes.elementType.isRequired,
  DemoComplete: PropTypes.elementType.isRequired,
  nextButtonDisabled: PropTypes.bool,
  onNext: PropTypes.func,
  onPrevious: PropTypes.func,
  setCurrentStep: PropTypes.func,
  yourEmail: PropTypes.string,
};

/**
 * A basic wizard to step through 3 states:
 * 1) The initial scheduling screen, shows date and time pickers
 * 2) Collect information screen to email schedule details
 * 3) Final screen with confirmation information
 */
function ScheduleWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [yourEmail, setYourEmail] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const dateSelected = useSelector(selectDate);
  const timeSelected = useSelector(selectTime);

  const handleFieldChange = useCallback((field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }, []);

  // Validate form from React state
  const isFormValid =
    formData.name &&
    formData.email &&
    formData.phone &&
    /^[^@]+@[^@]+\.[^@]+$/.test(formData.email);

  const onNext = useCallback(() => {
    if (currentStep > 1) {
      if (currentStep === 2) {
        // e-mail form - validate from React state
        if (!isFormValid) {
          return; // stay on step 2 until form is valid
        }
        setYourEmail(formData.email);
      }
      setCurrentStep(3); // final step, schedule complete
    } else {
      setCurrentStep(currentStep + 1);
    }
  }, [currentStep, isFormValid, formData.email]);

  const onPrevious = useCallback(() => {
    if (currentStep <= 1) {
      setCurrentStep(1);
    } else {
      setCurrentStep(currentStep - 1);
    }
  }, [currentStep]);

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
          <ContactForm formData={formData} onFieldChange={handleFieldChange} />
        </div>
      );
      backButtonDisabled = false;
      nextButtonDisabled = !isFormValid;
      break;

    default:
      break;
  }

  if (dateSelected && timeSelected) {
    nextButtonDisabled = false;
  }

  return (
    <ScheduleWizardDom
      backButtonDisabled={backButtonDisabled}
      currentRightSide={currentRightSide}
      currentStep={currentStep}
      DateScheduled={DateScheduled}
      DemoComplete={DemoComplete}
      nextButtonDisabled={nextButtonDisabled}
      onNext={onNext}
      onPrevious={onPrevious}
      setCurrentStep={setCurrentStep}
      yourEmail={yourEmail}
    />
  );
}

export { ScheduleWizard, ScheduleWizardDom };
