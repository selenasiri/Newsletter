import { SET_ALERT, REMOVE_ALERT } from './types';

const uniqueID = () => {
  return Math.floor(Math.random() * Date.now());
  // Date.now() -- 1619581717814, number of miliseconds elapsed since January 1, 1970.
};

export const setAlert = (msg, alertType, timeout = 5000) => (dispatch) => {
  const id = uniqueID();

  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id },
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
