import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import React from "react";

import './demo-complete.css';

function onHome(setCurrentStep) {
  setCurrentStep(1);
}

function onEmail(setCurrentStep) {
  setCurrentStep(2);
}

function DemoComplete(props) {
  const email = "foo";
  const {setCurrentStep} = props;
  const onHomeCurried = () => onHome(setCurrentStep);
  const onEmailCurried = () => onEmail(setCurrentStep);

  return (
    <div className="container-full center">
      <FontAwesomeIcon className="check-icon fa-3x" icon={faCheckCircle} />
      <form>
        <h2>We just scheduled a demo for you</h2>
        <p>A calendar invitation for your upcoming demo session has been to your email ({email})</p>
        <div className="appointment">
          <div className="item">DATE</div>
          <div className="item">TIME</div>
        </div>
        <p>
          <button className="primary" id="home" onClick={onHomeCurried}>Get back home</button>
        </p>
        <p>
          <button className="link" id="email" onClick={onEmailCurried}>Resend Email</button>
        </p>
      </form>
    </div>
  );
}

export default DemoComplete;
