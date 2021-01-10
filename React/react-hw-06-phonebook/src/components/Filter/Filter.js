import React from 'react';
import filterStyles from './Filter.module.css';
import { filter, changeFilter } from '../../modules/slices/filterSlice';
import Input from '../../common/Input/Input';
import { useSelector, useDispatch } from 'react-redux';

const Filter = () => {
  const filterValue = useSelector(filter);
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <>
      <div className={filterStyles.Filter}>
        <Input
          value={filterValue}
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

export default Filter;
