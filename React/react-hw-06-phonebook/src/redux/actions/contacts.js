import { ADD_CONTACT, REMOVE_CONTACT, UPDATE_CONTACTS } from '../types';

export const addContact = (data) => ({
  type: ADD_CONTACT,
  payload: data,
});

export const removeContact = (id) => ({
  type: REMOVE_CONTACT,
  payload: id,
});

export const updateContacts = () => ({
  type: UPDATE_CONTACTS,
});
