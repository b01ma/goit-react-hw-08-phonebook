const { createAsyncThunk } = require('@reduxjs/toolkit');
const { registerUser, logInUser } = require('service/contactsAPI');

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await registerUser(credentials);
    return data;
  } catch (error) {
    alert(error.response);
  }
});

const logIn = createAsyncThunk('auth/logIn', async credentials => {
  try {
    const { data } = await logInUser(credentials);
    return data;
  } catch (error) {
    console.log(error.response);
  }
});

const operations = {
  register,
  logIn,
};

export default operations;
