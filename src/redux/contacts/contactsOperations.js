import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, addContact, deleteContact } from 'service/contactsAPI';

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

const remove = createAsyncThunk('contacts/delete', async id => {
  try {
    const { data } = await deleteContact(id);

    return data;
  } catch (error) {
    alert(error);
  }
});

const contactsOperations = {
  get,
  add,
  remove,
};

export default contactsOperations;
