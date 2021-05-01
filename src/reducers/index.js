import { combineReducers } from 'redux';

import alertReducer from './alertReducer';
import newsLetterReducer from './newsLetterReducer';

export default combineReducers({
  alert: alertReducer,
  newsLetter: newsLetterReducer,
});
