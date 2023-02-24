import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Authorithation = () => {
  return (
    <Container maxWidth="md">
      <Typography
        variant="h1"
        align="center"
        gutterBottom={true}
        sx={{ marginTop: 5, fontSize: 40 }}
      >
        Welocme to Contacts
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography
          variant="button"
          align="center"
          gutterBottom={true}
          sx={{
            marginTop: 5,
            fontSize: 20,
            '&:hover': {
              backgroundColor: 'primary',
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          <Link to="/auth/logIn">Login</Link> /{' '}
        </Typography>
        <Typography
          variant="button"
          align="center"
          gutterBottom={true}
          sx={{
            marginTop: 5,
            fontSize: 20,
            '&:hover': {
              backgroundColor: 'primary',
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          <Link to="/auth/registration">Registration</Link>
        </Typography>
      </Box>
      <Outlet />
    </Container>
  );
};

export default Authorithation;
