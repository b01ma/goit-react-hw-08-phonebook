import React from 'react';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const filteredContacts = items => {
    const contacts = items.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
    return contacts;
  };

  return (
    <div>
      <p>Contacts</p>
      <ul>
        {filteredContacts(contacts).map(contact => {
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

export default ContactList;
