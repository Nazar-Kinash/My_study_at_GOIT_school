import { configureStore } from '@reduxjs/toolkit';
import filter from '../slices/filterSlice';
import contacts from '../slices/contactsSlice';

const rootReducer = { contacts, filter };

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
