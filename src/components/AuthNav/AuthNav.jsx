import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

const AuthNav = () => {
  return (
    <div>
      <Typography color="inherit" variant="button">
        <Link to="/auth">Log In / Register</Link>
      </Typography>
    </div>
  );
};

export default AuthNav;
