import {updateTime} from '../../actions/date-scheduled';
import {useDispatch} from 'react-redux';

import moment from 'moment';
import React from "react";

import './time-picker.css';

function handleClick(dispatch, time) {
  dispatch(updateTime(time.currentTarget.innerText));
}

function TimePicker() {
  const begin = moment();
  const halfHours = [];
  const dispatch = useDispatch();

  begin.hour(0);
  begin.minute(0);
  begin.second(0);

  for (let interval = 0; interval < 48; interval++) {
    const time = begin.format('h:mm a');
    const handleClickCurried = (time) => {
      handleClick(dispatch, time);
    };

    let tabIndex = -1;

    if (interval === 0) {
      tabIndex = 10;
    }

    halfHours.push(<li key={interval} onClick={handleClickCurried} tabIndex={tabIndex}>{time}</li>);
    begin.add(30, 'm');
  }

  return (
    <div className="time-picker-wrapper">
      <ul className="time-picker">{halfHours}</ul>
    </div>
  );
}

export default TimePicker;
