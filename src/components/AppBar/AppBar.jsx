import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Container } from '@mui/system';
import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import useAuth from 'hooks/useAuth';

const MainBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="md">
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex' }}>
              <Navigation />
            </Box>
            <Box>{isLoggedIn ? <UserMenu /> : <AuthNav />}</Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default MainBar;
