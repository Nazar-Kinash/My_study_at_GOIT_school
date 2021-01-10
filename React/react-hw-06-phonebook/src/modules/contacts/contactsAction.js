import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('ADD_CONTACT');
export const removeContact = createAction('REMOVE_CONTACT');
export const updateContacts = createAction('UPDATE_CONTACTS');
