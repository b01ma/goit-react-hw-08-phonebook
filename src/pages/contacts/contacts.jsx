import ContactList from 'components/ContactList/ContactList';
import ContactSearch from 'components/ContactSearch/ContactSearch';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Contacts = () => {
  return (
    <div>
      <h1>Your contacts</h1>
      <Link to="/contacts/newContact">New Contact</Link>
      <Outlet />
      <ContactSearch />
      <ContactList />
    </div>
  );
};

export default Contacts;
