import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const { createAsyncThunk } = require('@reduxjs/toolkit');
const {
  registerUser,
  logInUser,
  logOutUser,
  setAuthHeader,
  clearAuthHeader,
} = require('service/contactsAPI');

const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await registerUser(credentials);
      toast.success('Successfully registered');
      return data;
    } catch (error) {
      toast.error('Registration error');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const logIn = createAsyncThunk('auth/logIn', async (credentials, thunkAPI) => {
  try {
    const { data } = await logInUser(credentials);
    setAuthHeader(data.token);
    toast.success('Successfully logged in');
    return data;
  } catch (error) {
    toast.error('Log in attempt error');
    return thunkAPI.rejectWithValue(error.message);
  }
});

const logOut = createAsyncThunk('auth/logOut', async () => {
  try {
    await logOutUser();
    clearAuthHeader();
    toast.success('Successfully logged out');
  } catch (error) {
    console.log(error.message);
  }
});

const authOperations = {
  register,
  logIn,
  logOut,
};

export default authOperations;
