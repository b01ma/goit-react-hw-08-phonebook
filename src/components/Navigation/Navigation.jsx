import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <>
      <Typography color="inherit" sx={{ mr: 2 }}>
        <NavLink to="/">Home</NavLink>
      </Typography>
      <Typography color="inherit" sx={{ mr: 2 }}>
        <NavLink to="/contacts">Contacts</NavLink>
      </Typography>
    </>
  );
}
