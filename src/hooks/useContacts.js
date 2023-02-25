import { useSelector } from 'react-redux';
import {
  selectFilter,
  selectItems,
  selectStatus,
} from 'redux/contacts/contactsSelectors';

export const useContacts = () => {
  const contactsItems = useSelector(selectItems);
  const contactsFilter = useSelector(selectFilter);
  const status = useSelector(selectStatus);

  return {
    contactsFilter,
    contactsItems,
    isLoading: status === 'pending',
  };
};
