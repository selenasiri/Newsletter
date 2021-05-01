import { setAlert } from './alert';
import { GET_NEWS_LETTERS } from './types';
import { NEWS_LETTERS } from '../data/newsLetters';

// Get news letters
export const getNewsLetters = () => (dispatch) => {
  dispatch({
    type: GET_NEWS_LETTERS,
    payload: NEWS_LETTERS,
  });
};

//www.freecodecamp.org/news/javascript-promises-explained/

const fakeSubscribeNewsLettersApi = (email, selectedNewsLetterIds) => {
  console.log(email, selectedNewsLetterIds);

  return new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 10) + 1; // returns a random integer from 1 to 10
    console.log(`randomNumber: ${randomNumber}`);

    setTimeout(() => {
      if (randomNumber === 1) {
        reject(Error('Something went wrong! Try to subscribe later please!'));
      } else {
        resolve({ data: 'You successfully subscribed to these news letters' });
      }
    }, 2000); // 2 seconds
  });
};

// Subscribe news letters
export const subscribeNewsLetters = (formData, history) => async (dispatch) => {
  const { email, selectedNewsLetterIds } = formData;
  try {
    dispatch(setAlert('Subscribing...', 'info'));

    const response = await fakeSubscribeNewsLettersApi(
      email,
      selectedNewsLetterIds
    );

    console.log(response.data);
    dispatch(setAlert(response.data, 'success'));

    history.push('/confirmation');
  } catch (err) {
    console.log(err.message);
    dispatch(setAlert(err.message, 'danger'));
  }
};
