import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <Typography
        color="inherit"
        variant="button"
        sx={{
          mr: 2,
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <NavLink to="/">Home</NavLink>
      </Typography>
      <Typography
        color="inherit"
        variant="button"
        sx={{
          mr: 2,
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <NavLink to="/contacts">Contacts</NavLink>
      </Typography>
    </>
  );
};

export default Navigation;
