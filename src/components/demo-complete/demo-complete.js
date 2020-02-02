import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useSelector} from 'react-redux';

import React from "react";

import './demo-complete.css';

function onHome(setCurrentStep) {
  setCurrentStep(1);
}

function onEmail(setCurrentStep) {
  setCurrentStep(2);
}

/**
 * Create a component itself without having to deal with redux for testing.
 * https://redux.js.org/recipes/writing-tests/#components
 * > In order to be able to test the App component itself without having to deal with the decorator,
 * > we recommend you to also export the undecorated component
 */
function DemoCompleteDom(props) {
  const {dateSelected, onHome, onEmail, timeSelected, yourEmail} = props;

  return (
    <div className="container-full center">
      <FontAwesomeIcon className="check-icon fa-3x" icon={faCheckCircle} />
      <form>
        <h2>We just scheduled a demo for you</h2>
        <p className="info">A calendar invitation for your upcoming demo session has been to your email ({yourEmail})</p>
        <div className="appointment">
          <div className="appointment-row">
            <span className="item">DATE</span>
            <span className="item">TIME</span>
          </div>
          <div className="appointment-row">
            <span className="item schedule">{dateSelected}</span>
            <span className="item schedule">{timeSelected}</span>
          </div>
        </div>
        <p>
          <button className="primary" data-testid="home" id="home" onClick={onHome}>Get back home</button>
        </p>
        <p>
          <button className="link" id="email" onClick={onEmail}>Resend Email</button>
        </p>
      </form>
    </div>
  );
}

function DemoComplete(props) {
  const {setCurrentStep, yourEmail} = props;
  const dateSelected = useSelector((state) => {
    return state.dateScheduledReducer.schedule.date;
  });
  const timeSelected = useSelector((state) => {
    return state.dateScheduledReducer.schedule.time || 'Please select';
  });
  const onHomeCurried = () => onHome(setCurrentStep);
  const onEmailCurried = () => onEmail(setCurrentStep);

  return <DemoCompleteDom
           dateSelected={dateSelected}
           onHome={onHomeCurried}
           onEmail={onEmailCurried}
           timeSelected={timeSelected}
           yourEmail={yourEmail} />;
}

export {DemoComplete, DemoCompleteDom};
