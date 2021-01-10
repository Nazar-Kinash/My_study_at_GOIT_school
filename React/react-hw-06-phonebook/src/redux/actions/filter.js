import { CHANGE_FILTER } from '../types';

export const changeFilter = (value) => ({
  type: CHANGE_FILTER,
  payload: value,
});
