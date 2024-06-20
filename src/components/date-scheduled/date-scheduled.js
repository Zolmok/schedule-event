import { useSelector } from 'react-redux';

import ClassNames from '../class-names';
import React from 'react';

import './date-scheduled.css';

function DateScheduledDom(props) {
  const { renderSchedule, dateSelected, showTime, timeSelected } = props;

  return (
    <div className={renderSchedule.get()}>
      <p className="card-title">DATE</p>
      <p className="card-body card-chosen">{dateSelected}</p>
      <p className="card-title">TIME</p>
      <p className={showTime.get()}>{timeSelected}</p>
    </div>
  );
}

function DateScheduled() {
  const dateSelected = useSelector((state) => {
    return state.dateScheduledReducer.schedule.date;
  });
  const timeSelected = useSelector((state) => {
    return state.dateScheduledReducer.schedule.time || 'Please select';
  });

  let renderSchedule = ClassNames('card-schedule');
  let showTime = ClassNames('card-body card-muted');

  if (dateSelected) {
    renderSchedule.add('animate-schedule');
  }
  if (timeSelected !== 'Please select') {
    showTime.add('show-time');
  }

  return (
    <DateScheduledDom
      renderSchedule={renderSchedule}
      dateSelected={dateSelected}
      showTime={showTime}
      timeSelected={timeSelected}
    />
  );
}

export { DateScheduled, DateScheduledDom };
