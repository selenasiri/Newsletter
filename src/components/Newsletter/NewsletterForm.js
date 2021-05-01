import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getNewsLetters, subscribeNewsLetters } from '../../actions/newsLetter';
import { setAlert } from '../../actions/alert';
import NewsLetterItem from './NewsLetterItem';
import './NewsletterForm.css';

const NewsletterForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { newsLetters } = useSelector((state) => state.newsLetter);

  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [email, setEmail] = useState('');

  useEffect(() => {
    dispatch(getNewsLetters());
  }, [dispatch]);

  const toggleCheckbox = (label) => {
    const existingOne = selectedCheckboxes.find(
      (checkboxLabel) => checkboxLabel === label
    );

    if (existingOne) {
      setSelectedCheckboxes((prev) =>
        prev.filter((checkboxLabel) => checkboxLabel !== label)
      );
    } else {
      setSelectedCheckboxes((prev) => [...prev, label]);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    console.log(selectedCheckboxes);

    if (selectedCheckboxes.length === 0) {
      dispatch(setAlert('please select at least one news letter', 'danger'));
      return;
    }

    for (const checkbox of selectedCheckboxes) {
      console.log(checkbox, 'is selected.');
    }

    console.log('email', email);

    const formData = { email, selectedNewsLetterIds: selectedCheckboxes };

    dispatch(subscribeNewsLetters(formData, history));

    // Todo: disable submit button
  };

  if (newsLetters.length === 0) {
    return <h4>No news letters found...</h4>;
  }

  return (
    <form onSubmit={handleFormSubmit} className="form">
      <h3 className="center">
        Select all the newsletters you'd like to receive
      </h3>

      <ul className="list">
        {newsLetters.map((newsLetter) => (
          <NewsLetterItem
            key={newsLetter.id}
            newsLetter={newsLetter}
            toggleCheckbox={toggleCheckbox}
          />
        ))}
      </ul>

      <div className="control">
        <label htmlFor="email">Enter Your Email</label>
        <input
          type="email"
          placeholder="Enter email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>

      <button type="submit">SUBSCRIBE</button>
    </form>
  );
};

export default NewsletterForm;
