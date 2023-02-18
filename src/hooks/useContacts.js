import { useSelector } from 'react-redux';
import { selectFilter, selectItems } from 'redux/contacts/contactsSelectors';

export const useContacts = () => {
  const contactsItems = useSelector(selectItems);
  const contactsFilter = useSelector(selectFilter);

  return {
    contactsFilter,
    contactsItems,
  };
};
