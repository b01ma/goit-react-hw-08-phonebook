import React from 'react';
import { Link as RouteLink } from 'react-router-dom';

import { Container } from '@mui/system';
import { Typography, Box, Link } from '@mui/material';

const PageNotFound = () => {
  return (
    <Container maxWidth="md">
      <Typography
        variant="h1"
        align="center"
        gutterBottom={true}
        sx={{ marginTop: 5, fontSize: 40 }}
      >
        Page Not Found
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Link
          component="button"
          variant="body2"
          onClick={() => {
            console.info("I'm a button.");
          }}
        >
          <RouteLink to="/">Home Page</RouteLink>
        </Link>
        {/* <Typography variant="button"></Typography> */}
      </Box>
    </Container>
  );
};

export default PageNotFound;
