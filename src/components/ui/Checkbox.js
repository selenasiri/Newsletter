import { useState } from 'react';

const Checkbox = ({ handleCheckboxChange, value, label }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckboxChange = () => {
    setIsChecked((prev) => !prev);

    handleCheckboxChange(value);
  };

  return (
    <label htmlFor={value}>
      <input
        type="checkbox"
        id={value}
        value={value}
        checked={isChecked}
        onChange={toggleCheckboxChange}
      />
      {label}
    </label>
  );
};

export default Checkbox;
