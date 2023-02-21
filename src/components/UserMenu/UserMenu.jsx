import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useAuth from 'hooks/useAuth';

export default function UserMenu() {
  const { user, handleLogOut } = useAuth();

  return (
    <Box sx={{ display: 'flex' }}>
      <p>Hello {user?.name}</p>
      <Button color="inherit" onClick={handleLogOut}>
        Log Out
      </Button>
    </Box>
  );
}
