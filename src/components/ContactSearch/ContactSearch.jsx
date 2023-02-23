import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/contactsSlice';
import { useContacts } from 'hooks/useContacts';
import { TextField, FormControl } from '@mui/material';

const ContactSearch = () => {
  const { contactsFilter } = useContacts();
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <FormControl fullWidth sx={{ marginBottom: '10px' }}>
      <TextField
        id="filled-search"
        label="Search contact"
        type="search"
        variant="outlined"
        size="small"
        sx={{ margin: '10px' }}
        value={contactsFilter}
        onChange={handleChange}
      />
    </FormControl>
  );
};

export default ContactSearch;
