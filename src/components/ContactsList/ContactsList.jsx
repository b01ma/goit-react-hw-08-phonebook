import {
  Card,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import filterContacts from 'utils/filterContacts/filterContacts';
import React from 'react';
import { useDispatch } from 'react-redux';
import contactsOperations from 'redux/contacts/contactsOperations';
import { useContacts } from 'hooks/useContacts';
import Spinner from 'components/Spinner';

const ContactsList = () => {
  const { contactsItems, contactsFilter, isLoading } = useContacts();
  const contactsList = filterContacts(contactsItems, contactsFilter);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(contactsOperations.remove(id));
  };

  return (
    <Card sx={{ padding: '10px' }}>
      <Typography
        variant="h2"
        align="left"
        gutterBottom={true}
        sx={{
          fontSize: 20,
          fontWeight: 500,
          margin: '10px',
        }}
      >
        Your contacts
      </Typography>

      {isLoading && <Spinner />}

      <List sx={{ maxWidth: '800px' }}>
        {contactsList?.map(contact => {
          return (
            <ListItem
              key={contact.id}
              alignItems="flex-start"
              disablePadding
              sx={{ fontSize: 25, margin: '10px' }}
            >
              <ListItemText
                primary={`${contact.name}: ${contact.number}`}
                sx={{ fontSize: 25 }}
              />
              <IconButton
                edge="end"
                aria-label="delete"
                id={contact.id}
                onClick={() => handleDelete(contact.id)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
          );
        })}
      </List>
    </Card>
  );
};

export default ContactsList;
