import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Container } from '@mui/system';

import { NavLink } from 'react-router-dom';

import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import authOperations from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';

export default function ButtonAppBar() {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    console.log('logged out');

    dispatch(authOperations.logOut());
  };

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

            {selectIsLoggedIn ? (
              <Button color="inherit" onClick={handleLogOut}>
                <NavLink to="/">LogOut</NavLink>
              </Button>
            ) : (
              <Button color="inherit">
                <NavLink to="/auth">Log in / Register</NavLink>
              </Button>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
