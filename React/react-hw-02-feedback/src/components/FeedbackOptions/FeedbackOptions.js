import React from 'react';
import classes from './FeedbackOgtions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionsArr = Object.keys(options);
  return (
    <>
      {optionsArr.map((option) => (
        <button
          className={classes.Button}
          name={option}
          key={option}
          onClick={onLeaveFeedback}>
          {option}
        </button>
      ))}
    </>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
