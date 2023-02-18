import { useContacts } from 'hooks/useContacts';
import React from 'react';
import { selectFilter, selectItems } from 'redux/contacts/contactsSelectors';

const ContactsList = () => {
  const { contactsItems } = useContacts(selectItems);
  const { contactsFilter } = useContacts(selectFilter);

  const filteredContacts = items => {
    const contacts = items.filter(item =>
      item.name.toLowerCase().includes(contactsFilter.toLowerCase())
    );
    return contacts;
  };

  return (
    <div>
      <p>Contacts</p>
      <ul>
        {filteredContacts(contactsItems).map(contact => {
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
