import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Contacts from 'pages/Contacts/Contacts';
import Authorithation from 'pages/Auth/Authorithation';
import LoginForm from './LogininForm/LoginForm';
import RegisterForm from './RegisterForm/RegisterForm';
import ContactSearch from './ContactSearch/ContactSearch';
import ContactsList from './ContactsList/ContactsList';
import ButtonAppBar from './AppBar/AppBar';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';

export const App = () => {
  return (
    <div>
      <ButtonAppBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/auth/login" component={<Contacts />} />
          }
        >
          <Route path="contactSearch" element={<ContactSearch />} />
          <Route path="contactList" element={<ContactsList />} />
        </Route>
        <Route
          path="/auth"
          element={
            <RestrictedRoute redirectTo="/" component={<Authorithation />} />
          }
        >
          <Route path="logIn" element={<LoginForm />} />
          <Route path="registration" element={<RegisterForm />} />
        </Route>
      </Routes>
    </div>
  );
};
