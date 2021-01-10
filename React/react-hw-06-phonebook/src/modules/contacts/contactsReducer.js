import storage from '../../helpers/storage';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, removeContact, updateContacts } from '../actions/contacts';

export default createReducer([], {
  [addContact]: (state, action) => [...state, action.payload],
  [removeContact]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
  [updateContacts]: (state, action) => storage.get('contacts'),
});
