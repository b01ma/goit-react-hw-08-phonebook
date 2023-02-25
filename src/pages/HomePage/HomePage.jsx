import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from '@mui/system';
import { Typography, Button, Box } from '@mui/material';
import useAuth from 'hooks/useAuth';

const HomePage = () => {
  const isLoggedIn = useAuth().isLoggedIn;
  return (
    <Container maxWidth="md">
      <Typography
        variant="h1"
        align="center"
        gutterBottom={true}
        sx={{ marginTop: 5, fontSize: 40 }}
      >
        Your contacts app
      </Typography>
      <Typography variant="body1" align="center" sx={{ marginBottom: 10 }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati esse
        explicabo voluptatum, odit error ut quidem sit soluta omnis animi?
      </Typography>

      {!isLoggedIn && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained">
            <Link to="/auth">Log in / Register</Link>
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default HomePage;
