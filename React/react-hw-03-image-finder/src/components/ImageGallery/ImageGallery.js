import React, { useState } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import styles from './ImageGallery.module.css';
import { v4 as uuidv4 } from 'uuid';
import Modal from '../Modal/Modal';

const ImageGallery = ({ images, loader, loadMore }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [openImage, setOpenImage] = useState({ src: '', alt: '' });

  const togleModal = () => {
    setModalIsOpen((prev) => !prev);
  };

  const openModal = (e) => {
    const { src, alt } = e.target;
    setOpenImage({ src: src, alt: alt });
    togleModal();
  };

  return (
    <>
      {modalIsOpen && (
        <Modal imageInModal={openImage} togleModal={togleModal} />
      )}
      <ul className={styles.ImageGallery}>
        {images &&
          images.map((img) => (
            <ImageGalleryItem {...img} key={uuidv4()} openModal={openModal} />
          ))}
      </ul>
      {loader && <Loader type='Bars' color='#00BFFF' height={80} width={80} />}
      {images && !loader && <Button onClick={loadMore} />}
    </>
  );
};

export default ImageGallery;
