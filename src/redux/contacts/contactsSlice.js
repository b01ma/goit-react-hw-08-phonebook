import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducer: {
    addItem: (state, action) => [...state, action.payload],
    deleteItem: (state, action) =>
      state.filter(contact => contact.id !== action.payload),
    setFilter: (state, action) => (state = action.payload),
  },
});

export const { addItem, deleteItem, setFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
