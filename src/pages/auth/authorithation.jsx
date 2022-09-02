import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Authorithation = () => {
  return (
    <div>
      <h1>Welocme to Contacts</h1>
      <NavLink to="/auth/logIn">Login</NavLink>
      <NavLink to="/auth/registration">Registration</NavLink>
      <Outlet />
    </div>
  );
};

export default Authorithation;
