import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.css';

const Input = ({ value, onChange, type, name, placeholder, labelText }) => {
  return (
    <div className={styles['input-wrapper']}>
      <label className={styles.Label} htmlFor={name}>
        {labelText}
      </label>
      <input
        className={styles.Input}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        maxLength={40}
        onChange={onChange}
      />
    </div>
  );
};

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  labelText: PropTypes.string,
};

export default Input;
