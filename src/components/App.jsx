import { Routes, Route } from 'react-router-dom';
import MainBar from './MainBar';
import Home from 'pages/Home';
import Authorization from 'pages/Authorization';
import Contacts from 'pages/Contacts';
import PageNotFound from 'pages/PageNotFound';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import LogInForm from './LogInForm';
import RegisterForm from './RegisterForm';
import { ToastContainer } from 'react-toastify';

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
            <RestrictedRoute redirectTo="/" component={<Authorization />} />
          }
        >
          <Route index element={<LogInForm />} />
          <Route path="login" element={<LogInForm />} />
          <Route path="registration" element={<RegisterForm />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ToastContainer />
    </>
  );
};
