import { useContacts } from 'hooks/useContacts';
import React from 'react';
import { useDispatch } from 'react-redux';
import contactsOperations from 'redux/contacts/contactsOperations';

const ContactsList = () => {
  const contactsList = useContacts().contactsItems;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(contactsOperations.get());
  };

  return (
    <div>
      <p>Contacts</p>
      <button type="button" onClick={handleClick}>
        Get Contacts
      </button>
      <ul>
        {contactsList?.map(contact => {
          return (
            <li key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactsList;
