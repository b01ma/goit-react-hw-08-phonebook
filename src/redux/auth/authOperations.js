const { createAsyncThunk } = require('@reduxjs/toolkit');
const {
  registerUser,
  logInUser,
  logOutUser,
  setAuthHeader,
  clearAuthHeader,
} = require('service/contactsAPI');

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await registerUser(credentials);
    return data;
  } catch (error) {
    alert(error);
  }
});

const logIn = createAsyncThunk('auth/logIn', async credentials => {
  try {
    const { data } = await logInUser(credentials);
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    alert(error);
  }
});

const logOut = createAsyncThunk('auth/logOut', async () => {
  try {
    await logOutUser();
    clearAuthHeader();
  } catch (error) {
    alert(error);
  }
});

const authOperations = {
  register,
  logIn,
  logOut,
};

export default authOperations;
