import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useAuth from 'hooks/useAuth';

const UserMenu = () => {
  const { user, handleLogOut } = useAuth();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography variant="button" sx={{ marginRight: '10px' }}>
        Hello {user?.name}
      </Typography>
      <Button color="inherit" onClick={handleLogOut}>
        Log Out
      </Button>
    </Box>
  );
};

export default UserMenu;
