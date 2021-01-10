import { CHANGE_FILTER } from '../types';

const initialState = '';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_FILTER:
      return (state = payload);
    default:
      return state;
  }
};
