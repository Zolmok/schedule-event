import moment from 'moment';

import {updateDate} from '../../actions/date-scheduled';
import {useDispatch} from 'react-redux';

import DayPicker from "react-day-picker";
import PropTypes from 'prop-types';
import React from 'react';

import "./every-day-calendar.css";
import "react-day-picker/lib/style.css";

const monday = 1;

function handleDayClick(dispatch, day) {
  dispatch(updateDate(day));
}

function EveryDayCalendar() {
  const dispatch = useDispatch();
  const handleDayClickCurried = (day) => {
    const dayDate = moment(day).format('MMMM D, YYYY');

    handleDayClick(dispatch, dayDate);
  };

  return (
    <div className="every-day-calendar">
      <p className="info-heading">Select date and time</p>
      <DayPicker
        onDayClick={handleDayClickCurried}
        firstDayOfWeek={monday}
      />
    </div>
  );
}

EveryDayCalendar.propTypes = {
  'setSelection': PropTypes.func
};

export default EveryDayCalendar;
