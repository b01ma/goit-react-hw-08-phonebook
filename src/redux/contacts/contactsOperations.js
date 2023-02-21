import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, addContact } from 'service/contactsAPI';

const get = createAsyncThunk('contacts/get', async () => {
  try {
    const { data } = await getContacts();
    return data;
  } catch (error) {
    alert(error.response);
  }
});

const add = createAsyncThunk('contacts/add', async contact => {
  try {
    const { data } = await addContact(contact);
    return data;
  } catch (error) {
    alert(error.response);
  }
});

const contactsOperations = {
  get,
  add,
};

export default contactsOperations;
