import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Contacts from 'pages/Contacts/Contacts';
import Authorithation from 'pages/Auth/Authorithation';
import LoginForm from './LogininForm/LoginForm';
import RegisterForm from './RegisterForm';
import NewContactForm from './NewContactForm/NewContactForm';

import ButtonAppBar from './AppBar/AppBar';

export const App = () => {
  return (
    <div>
      <ButtonAppBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />}>
          <Route path="newContact" element={<NewContactForm />} />
        </Route>
        <Route path="/auth" element={<Authorithation />}>
          <Route path="logIn" element={<LoginForm />} />
          <Route path="registration" element={<RegisterForm />} />
        </Route>
      </Routes>
    </div>
  );
};
