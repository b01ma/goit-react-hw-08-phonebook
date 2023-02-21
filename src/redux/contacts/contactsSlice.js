import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './contactsOperations';

const initialState = {
  items: [],
  filter: '',
  status: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [contactsOperations.get.pending](state, _) {
      state.status = 'pending';
    },
    [contactsOperations.get.fulfilled](state, action) {
      state.items = action.payload;
      state.status = 'fulfilled';
    },
    [contactsOperations.add.pending](state, _) {
      state.status = 'pending';
    },
    [contactsOperations.add.fulfilled](state, action) {
      state.items = [...state.items, action.payload];
      state.status = 'fulfilled';
    },
  },
});

export const { setFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
