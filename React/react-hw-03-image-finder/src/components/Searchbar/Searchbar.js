import React from 'react';
import styles from './Searchbar.module.css';

const Searchbar = ({ onSubmit, inputChange, inputValue }) => {
  return (
    <>
      <header className={styles.Searchbar} onSubmit={onSubmit}>
        <form className={styles.SearchForm}>
          <button type='submit' className={styles['SearchForm-button']}>
            <span className={styles['SearchForm-button-label']}>Search</span>
          </button>

          <input
            className={styles['SearchForm-input']}
            onChange={inputChange}
            name='queryInput'
            type='text'
            value={inputValue}
            autoComplete='off'
            autoFocus
            placeholder='Search images and photos'
          />
        </form>
      </header>
    </>
  );
};

export default Searchbar;
