import dayjs from 'dayjs';

import { updateDate } from '../../actions/date-scheduled';
import { useDispatch } from 'react-redux';

import { DayPicker } from 'react-day-picker';
import PropTypes from 'prop-types';
import React, { memo, useCallback, useState } from 'react';

import 'react-day-picker/dist/style.css';
import './every-day-calendar.css';

const EveryDayCalendarDom = memo(function EveryDayCalendarDom({ handleDayClick, monday, selected }) {
  return (
    <div className="every-day-calendar">
      <p className="info-heading">Select date and time</p>
      <DayPicker onDayClick={handleDayClick} firstDayOfWeek={monday} selected={selected} />
    </div>
  );
});

EveryDayCalendarDom.propTypes = {
  handleDayClick: PropTypes.func.isRequired,
  monday: PropTypes.number.isRequired,
  selected: PropTypes.instanceOf(Date),
};

function EveryDayCalendar() {
  const dispatch = useDispatch();
  const monday = 1;
  const [selected, setSelected] = useState(null);

  const handleDayClickCurried = useCallback(
    (day) => {
      setSelected(day);
      const dayDate = dayjs(day).format('MMMM D, YYYY');
      dispatch(updateDate(dayDate));
    },
    [dispatch]
  );

  return <EveryDayCalendarDom handleDayClick={handleDayClickCurried} monday={monday} selected={selected} />;
}

export { EveryDayCalendar, EveryDayCalendarDom };
