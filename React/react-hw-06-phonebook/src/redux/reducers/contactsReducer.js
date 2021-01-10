import storage from '../../helpers/storage';
import { ADD_CONTACT, REMOVE_CONTACT, UPDATE_CONTACTS } from '../types';

const initialState = [
  // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      return [...state, payload];
    case REMOVE_CONTACT:
      return state.filter((contact) => contact.id !== payload);
    case UPDATE_CONTACTS:
      return storage.get('contacts');

    default:
      return state;
  }
};
