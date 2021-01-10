import React from 'react';
import PropTypes from 'prop-types';

const Ststictics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <ul>
        <li>Good - {good}</li>
        <li>Neutral - {neutral}</li>
        <li>Bad - {bad}</li>
        <li>Total - {total()}</li>
        {good > 0 && <li>Positive feedback - {positivePercentage()}%</li>}
      </ul>
    </>
  );
};

Ststictics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.string.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Ststictics;
