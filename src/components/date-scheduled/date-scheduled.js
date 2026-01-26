import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import React, { useMemo, memo } from 'react';

import { selectDate, selectTimeWithDefault } from '../../selectors/date-scheduled';

import './date-scheduled.css';

const DateScheduledDom = memo(function DateScheduledDom({
  renderScheduleClass,
  dateSelected,
  showTimeClass,
  timeSelected,
}) {
  return (
    <div className={renderScheduleClass}>
      <p className="card-title">DATE</p>
      <p className="card-body card-chosen">{dateSelected}</p>
      <p className="card-title">TIME</p>
      <p className={showTimeClass}>{timeSelected}</p>
    </div>
  );
});

DateScheduledDom.propTypes = {
  renderScheduleClass: PropTypes.string.isRequired,
  dateSelected: PropTypes.string,
  showTimeClass: PropTypes.string.isRequired,
  timeSelected: PropTypes.string.isRequired,
};

function DateScheduled() {
  const dateSelected = useSelector(selectDate);
  const timeSelected = useSelector(selectTimeWithDefault);

  const renderScheduleClass = useMemo(
    () => `card-schedule${dateSelected ? ' animate-schedule' : ''}`,
    [dateSelected]
  );

  const showTimeClass = useMemo(
    () => `card-body card-muted${timeSelected !== 'Please select' ? ' show-time' : ''}`,
    [timeSelected]
  );

  return (
    <DateScheduledDom
      renderScheduleClass={renderScheduleClass}
      dateSelected={dateSelected}
      showTimeClass={showTimeClass}
      timeSelected={timeSelected}
    />
  );
}

export { DateScheduled, DateScheduledDom };
