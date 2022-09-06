import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const itemSlice = createSlice({
  name: 'contacts/items',
  initialState,
  reducers: {
    addItem: (state, action) => [...state, action.payload],
    deleteItem: (state, action) =>
      state.filter(contact => contact.id !== action.payload),
  },
});

export const { addItem, deleteItem } = itemSlice.actions;

export default itemSlice.reducer;
