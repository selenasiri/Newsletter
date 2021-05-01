import { GET_NEWS_LETTERS } from '../actions/types';

const initialState = {
  newsLetters: [],
};

const newsLetterReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_NEWS_LETTERS:
      return {
        ...state,
        newsLetters: payload,
      };
    default:
      return state;
  }
};

export default newsLetterReducer;
