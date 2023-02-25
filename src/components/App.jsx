import { Routes, Route } from 'react-router-dom';
import MainBar from './MainBar';
import Authorization from 'pages/Authorization';
import PageNotFound from 'pages/PageNotFound';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import LogInForm from './LogInForm';
import RegisterForm from './RegisterForm';
import { ToastContainer } from 'react-toastify';
import ContactsPage from 'pages/ContactsPage';
import HomePage from 'pages/HomePage';

export const App = () => {
  return (
    <>
      <MainBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute
              redirectTo="/auth/login"
              component={<ContactsPage />}
            />
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
