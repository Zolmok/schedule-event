import moment from 'moment';

import {updateDate} from '../../actions/date-scheduled';
import {useDispatch} from 'react-redux';

import DayPicker from "react-day-picker";
import React from 'react';

import "react-day-picker/lib/style.css";
import "./every-day-calendar.css";


function handleDayClick(dispatch, day) {
  dispatch(updateDate(day));
}

function EveryDayCalendarDom(props) {
  const {handleDayClick, monday} = props;

  return (
    <div className="every-day-calendar">
      <p className="info-heading">Select date and time</p>
      <DayPicker
        onDayClick={handleDayClick}
        firstDayOfWeek={monday}
      />
    </div>
  );
}

function EveryDayCalendar() {
  const dispatch = useDispatch();
  const handleDayClickCurried = (day) => {
    const dayDate = moment(day).format('MMMM D, YYYY');

    handleDayClick(dispatch, dayDate);
  };
  const monday = 1;

  return <EveryDayCalendarDom handleDayClick={handleDayClickCurried} monday={monday} />;
}

export {EveryDayCalendar, EveryDayCalendarDom};
