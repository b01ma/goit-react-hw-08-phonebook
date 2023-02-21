import FilterContacts from 'components/FilterContacts/FilterContacts';
import React from 'react';

const ContactsList = () => {
  const contactsList = FilterContacts();

  return (
    <div>
      <p>Contacts</p>
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
