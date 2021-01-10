import storage from '../../helpers/storage';
import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, { payload }) => [...state, payload],
    removeContact: (state, { payload }) =>
      state.filter((contact) => contact.id !== payload),
    updateContacts: (state, action) => storage.get('contacts'),
  },
});

export const {
  addContact,
  removeContact,
  updateContacts,
} = contactsSlice.actions;
export const contacts = (state) => state.contacts;
export default contactsSlice.reducer;
