import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ imageInModal: { src, alt }, togleModal }) => {
  const onClick = (e) => {
    if (e.target.nodeName !== 'IMG') {
      togleModal();
    }
  };

  return (
    <>
      <div className={styles.Overlay} onClick={onClick}>
        <div className={styles.Modal}>
          <img src={src} alt={alt} />
        </div>
      </div>
    </>
  );
};

export default Modal;
