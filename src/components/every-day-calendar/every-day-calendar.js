import dayjs from 'dayjs';

import { updateDate } from '../../actions/date-scheduled';
import { useDispatch } from 'react-redux';

import { DayPicker } from 'react-day-picker';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';

import 'react-day-picker/dist/style.css';
import './every-day-calendar.css';

function EveryDayCalendarDom({ handleDayClick, monday }) {
  return (
    <div className="every-day-calendar">
      <p className="info-heading">Select date and time</p>
      <DayPicker onDayClick={handleDayClick} firstDayOfWeek={monday} />
    </div>
  );
}

EveryDayCalendarDom.propTypes = {
  handleDayClick: PropTypes.func.isRequired,
  monday: PropTypes.number.isRequired,
};

function EveryDayCalendar() {
  const dispatch = useDispatch();
  const monday = 1;

  const handleDayClickCurried = useCallback(
    (day) => {
      const dayDate = dayjs(day).format('MMMM D, YYYY');
      dispatch(updateDate(dayDate));
    },
    [dispatch]
  );

  return <EveryDayCalendarDom handleDayClick={handleDayClickCurried} monday={monday} />;
}

export { EveryDayCalendar, EveryDayCalendarDom };
