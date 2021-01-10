import React from 'react';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ id, webformatURL, tags, openModal }) => {
  return (
    <li className={styles.ImageGalleryItem} onClick={openModal}>
      <img
        src={webformatURL}
        alt={tags}
        className='ImageGalleryItem-image'
        key={id}
      />
    </li>
  );
};

export default ImageGalleryItem;
