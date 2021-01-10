import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ type, title }) => {
  return (
    <button className={styles.Button} type={type}>
      {title}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
