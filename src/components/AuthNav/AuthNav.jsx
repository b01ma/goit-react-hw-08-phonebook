import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function AuthNav() {
  return (
    <div>
      <Button color="inherit">
        <Link to="/auth">Log In / Register</Link>
      </Button>
    </div>
  );
}
