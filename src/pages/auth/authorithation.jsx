import { Container } from '@mui/material';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Authorithation = () => {
  return (
    <Container maxWidth="md">
      <h1>Welocme to Contacts</h1>
      <NavLink to="/auth/logIn">Login</NavLink>
      <NavLink to="/auth/registration">Registration</NavLink>
      <Outlet />
    </Container>
  );
};

export default Authorithation;
