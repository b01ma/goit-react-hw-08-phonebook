import { Routes, Route } from 'react-router-dom';
import Contacts from 'pages/Contacts';
import MainBar from './AppBar/AppBar';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import PageNotFound from 'pages/PageNotFound/PageNotFound';
import LogInForm from './SingInForm/SignInForm';
import RegisterForm from './RegisterForm/RegisterFormM';
import Home from 'pages/Home';
import Authorithation from 'pages/Auth';

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
          <Route index element={<LogInForm />} />
          <Route path="logIn" element={<LogInForm />} />
          <Route path="registration" element={<RegisterForm />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
