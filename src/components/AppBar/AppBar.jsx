import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Container } from '@mui/system';

import { NavLink } from 'react-router-dom';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="md">
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex' }}>
              <Button color="inherit" sx={{ mr: 2 }}>
                <NavLink to="/">Home</NavLink>
              </Button>
              <Button color="inherit" sx={{ mr: 2 }}>
                <NavLink to="/contacts">Contacts</NavLink>
              </Button>
            </Box>

            <Button color="inherit">
              <NavLink to="/auth">Log in / Register</NavLink>
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
