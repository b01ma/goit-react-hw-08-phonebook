import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Contacts from 'pages/Contacts/Contacts';
import Authorithation from 'pages/Auth/Authorithation';
import LoginForm from './LogininForm/LoginForm';
import RegisterForm from './RegisterForm/RegisterForm';
import MainBar from './AppBar/AppBar';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import NewContactForm from './NewContactForm/NewContactForm';
import PageNotFound from 'pages/PageNotFound/PageNotFound';

export const App = () => {
  return (
    <>
      <MainBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/auth/login" component={<Contacts />} />
          }
        ></Route>
        <Route
          path="/auth"
          element={
            <RestrictedRoute redirectTo="/" component={<Authorithation />} />
          }
        >
          <Route path="logIn" element={<LoginForm />} />
          <Route path="registration" element={<RegisterForm />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
