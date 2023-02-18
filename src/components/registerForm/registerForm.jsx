import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from './../../redux/auth/authOperations';

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
    <div>
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={handleSubmit}
      >
        <label>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
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
            name="firstPassword"
            value={firstPassword}
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="secondPassword"
            value={secondPassword}
            onChange={handleChange}
          />
        </label>
        <button type="submit" style={{ width: 100 }}>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
