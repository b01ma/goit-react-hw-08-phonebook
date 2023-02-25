const filterContacts = (contacts, filter) => {
  const filteredArray = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim()) ||
      contact.number.includes(filter.toLowerCase().trim())
  );
  return filteredArray;
};

export default filterContacts;
