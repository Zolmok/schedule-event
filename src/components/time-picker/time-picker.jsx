import { updateTime } from '../../actions/date-scheduled';
import { useDispatch } from 'react-redux';

import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import React, { useCallback, useMemo } from 'react';

import './time-picker.css';

function TimePickerDom({ halfHours, onTimeClick }) {
  return (
    <div className="time-picker-wrapper">
      <ul className="time-picker" onClick={onTimeClick}>
        {halfHours.map((time) => (
          <li key={time} data-time={time} tabIndex={0}>
            {time}
          </li>
        ))}
      </ul>
    </div>
  );
}

TimePickerDom.propTypes = {
  halfHours: PropTypes.arrayOf(PropTypes.string).isRequired,
  onTimeClick: PropTypes.func.isRequired,
};

function TimePicker() {
  const dispatch = useDispatch();

  // Generate times once with useMemo
  const halfHours = useMemo(() => {
    const times = [];
    let time = dayjs().startOf('day');
    for (let i = 0; i < 48; i++) {
      times.push(time.format('h:mm a'));
      time = time.add(30, 'minute');
    }
    return times;
  }, []);

  // Single click handler with event delegation
  const handleClick = useCallback(
    (e) => {
      const time = e.target.dataset.time;
      if (time) {
        dispatch(updateTime(time));
      }
    },
    [dispatch]
  );

  return <TimePickerDom halfHours={halfHours} onTimeClick={handleClick} />;
}

export { TimePicker, TimePickerDom };
