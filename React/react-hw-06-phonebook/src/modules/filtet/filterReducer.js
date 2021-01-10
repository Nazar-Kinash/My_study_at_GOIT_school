import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from '../actions/filter';

export default createReducer('', {
  [changeFilter]: (state, action) => action.payload,
});
