import React, { useEffect, useState, useCallback } from 'react';
import './App.css';
import Searchbar from './components/Searchbar/Searchbar';
import axios from './axios/axios';
import ImageGallery from './components/ImageGallery/ImageGallery';

const App = () => {
  const [images, setImages] = useState(null);
  const [query, setQuery] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setQuery(inputValue);
    if (inputValue !== query) {
      cleanGalleryList();
    }
  };

  const inputChange = (e) => {
    setInputValue(e.target.value);
  };

  const cleanGalleryList = () => {
    setImages([]);
    setPage(1);
  };

  const scrolling = useCallback(() => {
    if (page > 1) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [page]);

  const getImages = useCallback(async () => {
    if (!query) {
      return;
    }
    setLoader(true);
    try {
      await axios(query, page).then((newImages) => {
        setImages((prevImages) => [...prevImages, ...newImages]);
      });
    } catch (error) {
      setError(true);
    } finally {
      setLoader(false);
      setInputValue('');
    }
  }, [query, page]);

  const loadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    getImages();
  }, [query, page, getImages]);

  useEffect(() => {
    setTimeout(() => {
      scrolling();
    }, 1000);
  }, [images, scrolling]);

  return (
    <div className='App'>
      <Searchbar
        onSubmit={submitHandler}
        inputChange={inputChange}
        inputValue={inputValue}
      />

      {error && <p>Request error</p>}

      <ImageGallery images={images} loader={loader} loadMore={loadMore} />
    </div>
  );
};

export default App;
