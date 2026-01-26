import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import React, { useCallback, memo } from 'react';

import { selectDate, selectTimeWithDefault } from '../../selectors/date-scheduled';

import './demo-complete.css';

/**
 * Create a component itself without having to deal with redux for testing.
 * https://redux.js.org/recipes/writing-tests/#components
 * > In order to be able to test the App component itself without having to deal with the decorator,
 * > we recommend you to also export the undecorated component
 */
const DemoCompleteDom = memo(function DemoCompleteDom({
  dateSelected,
  onHome,
  onEmail,
  timeSelected,
  yourEmail,
}) {
  return (
    <div className="container-full center">
      <FontAwesomeIcon className="check-icon fa-3x" icon={faCheckCircle} />
      <form onSubmit={(e) => e.preventDefault()}>
        <h2>We just scheduled a demo for you</h2>
        <p className="info">
          A calendar invitation for your upcoming demo session has been to your email ({yourEmail})
        </p>
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
          <button
            className="primary"
            data-testid="home"
            id="home"
            onClick={onHome}
            type="button"
          >
            Get back home
          </button>
        </p>
        <p>
          <button className="link" id="email" onClick={onEmail} type="button">
            Resend Email
          </button>
        </p>
      </form>
    </div>
  );
});

DemoCompleteDom.propTypes = {
  dateSelected: PropTypes.string,
  onHome: PropTypes.func.isRequired,
  onEmail: PropTypes.func.isRequired,
  timeSelected: PropTypes.string.isRequired,
  yourEmail: PropTypes.string,
};

function DemoComplete({ setCurrentStep, yourEmail }) {
  const dateSelected = useSelector(selectDate);
  const timeSelected = useSelector(selectTimeWithDefault);

  const onHome = useCallback(() => {
    setCurrentStep(1);
  }, [setCurrentStep]);

  const onEmail = useCallback(() => {
    setCurrentStep(2);
  }, [setCurrentStep]);

  return (
    <DemoCompleteDom
      dateSelected={dateSelected}
      onHome={onHome}
      onEmail={onEmail}
      timeSelected={timeSelected}
      yourEmail={yourEmail}
    />
  );
}

DemoComplete.propTypes = {
  setCurrentStep: PropTypes.func.isRequired,
  yourEmail: PropTypes.string,
};

export { DemoComplete, DemoCompleteDom };
