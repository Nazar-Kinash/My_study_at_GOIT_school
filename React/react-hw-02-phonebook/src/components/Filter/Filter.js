import React from 'react';
import PropTypes from 'prop-types';
import filterStyles from './Filter.module.css';

const Filter = ({ filter, inputHandler }) => {
  return (
    <>
      <div className={filterStyles['folter-container']}>
        <label className={filterStyles['filter__label']} htmlFor='filter'>
          Find contacts by name
        </label>
        <input
          className={filterStyles['filter__input']}
          type='text'
          name='filter'
          value={filter}
          placeholder='filter'
          onChange={inputHandler}
        />
      </div>
    </>
  );
};
Filter.proopTypes = {
  filter: PropTypes.string.isRequired,
  inputHandler: PropTypes.func.isRequired,
};

export default Filter;
