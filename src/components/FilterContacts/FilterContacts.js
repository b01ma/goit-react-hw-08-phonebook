import { useContacts } from 'hooks/useContacts';

const FilterContacts = () => {
  const { contactsItems, contactsFilter } = useContacts();
  const contacts = contactsItems;
  const filter = contactsFilter.toLowerCase().trim();

  const filteredArray = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filter) ||
      contact.number.includes(filter)
  );
  return filteredArray;
};

export default FilterContacts;
