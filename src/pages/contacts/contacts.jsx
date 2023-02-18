import { Container } from '@mui/material';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Contacts = () => {
  return (
    <Container maxWidth="md">
      <h1>Your contacts</h1>
      <Link to="/contacts/newContact">New Contact</Link>
      <Outlet />
    </Container>
  );
};

export default Contacts;
