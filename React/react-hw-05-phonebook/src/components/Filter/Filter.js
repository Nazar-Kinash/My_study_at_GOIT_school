import React from 'react';
import PropTypes from 'prop-types';
import filterStyles from './Filter.module.css';
import Input from '../Input/Input';

const Filter = ({ filter, inputHandler }) => {
  return (
    <>
      <div className={filterStyles.Filter}>
        <Input
          value={filter}
          onChange={inputHandler}
          type='text'
          name='filter'
          placeholder='Name'
          labelText='Find contacts by name'
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
