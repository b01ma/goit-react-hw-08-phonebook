import { combineReducers, configureStore } from '@reduxjs/toolkit';
import items from 'redux/contactSlice';
import filter from './filterSlice';

const contactsReducer = combineReducers({
  items,
  filter,
});

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
