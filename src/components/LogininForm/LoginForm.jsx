import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from './../../redux/auth/authOperations';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    }
    if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(authOperations.logIn(userData));

    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={handleSubmit}
      >
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit" style={{ width: 100 }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
