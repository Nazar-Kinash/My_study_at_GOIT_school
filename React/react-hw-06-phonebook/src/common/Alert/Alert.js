import React from 'react';
import styles from './Alert.module.css';
import PropTypes from 'prop-types';
// import '../../animation/animation.css';

const Alert = ({ text, setMassage }) => {
  const onClick = () => {
    setMassage('');
  };
  return (
    <div className={styles.Alert} onClick={onClick}>
      <p className={styles.Text}>{text}</p>
    </div>
  );
};

Alert.propTypes = {
  text: PropTypes.string.isRequired,
  setMassage: PropTypes.func.isRequired,
};

export default Alert;
