import React from 'react';
import styles from './Button.module.css';

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.Button}>
      Load More
    </button>
  );
};

export default Button;
