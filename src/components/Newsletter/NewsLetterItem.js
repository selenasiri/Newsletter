import './NewsletterItem.css';
import Checkbox from '../ui/Checkbox';

const NewsLetterItem = ({ newsLetter, toggleCheckbox }) => {
  const { id, imageUrl, title, description } = newsLetter;

  return (
    <li className="item">
      <img className="img" src={imageUrl} alt="news letter" />
      <div className="content">
        <Checkbox
          label={title}
          value={id}
          handleCheckboxChange={toggleCheckbox}
        />

        <p>{description}</p>
      </div>
    </li>
  );
};

export default NewsLetterItem;
