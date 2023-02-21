import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const registerUser = data => axios.post('/users/signup', data);

export const logInUser = data => axios.post('/users/login', data);

export const logOutUser = () => axios.post('/users/logout');

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const getContacts = () => axios.get('/contacts');

export const addContact = data => axios.post('/contacts', data);

export const deleteContact = id => axios.post(`/contacts/${id}`);

export const updateContact = (id, data) => axios.patch(`/contacts/${id}`, data);
