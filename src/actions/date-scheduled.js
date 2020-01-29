
export const UPDATE_DATE = 'UPDATE_DATE';
export const UPDATE_TIME = 'UPDATE_TIME';

export function updateDate(selection) {
  return {
    'type': UPDATE_DATE,
    'selection': selection
  };
}

export function updateTime(selection) {
  return {
    'type': UPDATE_TIME,
    'selection': selection
  };
}
