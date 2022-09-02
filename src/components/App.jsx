import { Routes, Route, NavLink } from 'react-router-dom';
import Home from 'pages/home/home';
import Contacts from 'pages/contacts/contacts';
import Authorithation from 'pages/auth/authorithation';

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        <NavLink to="/auth">Authorization</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/auth" element={<Authorithation />} />
      </Routes>
    </div>
  );
};
