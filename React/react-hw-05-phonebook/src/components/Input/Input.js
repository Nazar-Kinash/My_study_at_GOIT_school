import React from 'react';
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
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
