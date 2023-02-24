import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/authOperations';
import { Link } from 'react-router-dom';

const theme = createTheme();

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [firstPassword, setFirstPassword] = useState('');
  const [secondPassword, setSecondPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    }
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    }
    if (e.target.name === 'firstPassword') {
      setFirstPassword(e.target.value);
    }
    if (e.target.name === 'secondPassword') {
      setSecondPassword(e.target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (firstPassword !== secondPassword) {
      alert('check the password');
    } else {
      const newUser = {
        name,
        email,
        password: firstPassword,
      };

      dispatch(authOperations.register(newUser));
    }

    setName('');
    setEmail('');
    setFirstPassword('');
    setSecondPassword('');
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="First and Last name"
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="firstPassword"
                  label="Password"
                  type="password"
                  id="firstPassword"
                  autoComplete="new-password"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="secondPassword"
                  label="Password"
                  type="password"
                  id="secondPassword"
                  autoComplete="new-password"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Typography
                  variant="body2"
                  sx={{
                    '&:hover': {
                      backgroundColor: 'primary',
                      opacity: [0.9, 0.8, 0.7],
                    },
                  }}
                >
                  <Link to="/auth/logIn">
                    {'Already have an account? Log In'}
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default RegisterForm;
