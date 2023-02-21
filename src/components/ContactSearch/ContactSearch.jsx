import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/contactsSlice';
import { useContacts } from 'hooks/useContacts';

const ContactSearch = () => {
  const { contactsFilter } = useContacts();
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="searchContact"
          placeholder="Search name"
          value={contactsFilter}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default ContactSearch;
