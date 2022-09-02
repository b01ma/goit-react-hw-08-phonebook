import { Add } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';
import React from 'react';

const NewContactForm = () => {
  return (
    <div>
      <form>
        <TextField
          hiddenLabel
          id="outlined-basic"
          label="Name"
          variant="outlined"
        />
        <TextField
          hiddenLabel
          id="outlined-basic"
          label="Number"
          variant="outlined"
        />
        <Button variant="contained" startIcon={<Add />}>
          Add
        </Button>
      </form>
    </div>
  );
};

export default NewContactForm;
