// import { Box, AppBar } from '@mui/material';
// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const AppNavBar = () => {
//   return (
//     <div>

//       <nav>
//         <NavLink to="/">Home</NavLink>
//         <NavLink to="/contacts">Contacts</NavLink>
//         <NavLink to="/auth">Authorization</NavLink>
//       </nav>
//     </div>
//   );
// };

// export default AppNavBar;

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
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
      </AppBar>
    </Box>
  );
}
