import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/contactsSlice';
import { selectFilter } from 'redux/contacts/contactsSelectors';
import { useContacts } from 'hooks/useContacts';

const ContactSearch = () => {
  const { contactsFilter } = useContacts(selectFilter);
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
