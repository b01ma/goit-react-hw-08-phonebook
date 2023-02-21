import { Container, Typography } from '@mui/material';
import ContactSearch from 'components/ContactSearch/ContactSearch';
import ContactsList from 'components/ContactsList/ContactsList';
import NewContactForm from 'components/NewContactForm/NewContactForm';
import useAuth from 'hooks/useAuth';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import contactsOperations from 'redux/contacts/contactsOperations';

import { setAuthHeader } from 'service/contactsAPI';

const Contacts = () => {
  const dispatch = useDispatch();
  const token = useAuth().token;

  useEffect(() => {
    setAuthHeader(token);
    const getContcts = async () => {
      const contacts = await contactsOperations.get();
      dispatch(contacts);
    };

    getContcts();
  }, [dispatch, token]);
  return (
    <Container maxWidth="md">
      <Typography
        variant="h1"
        align="center"
        gutterBottom={true}
        sx={{ marginTop: 5, fontSize: 40 }}
      >
        Contacts
      </Typography>

      <NewContactForm />
      <ContactSearch />
      <ContactsList />
    </Container>
  );
};

export default Contacts;
