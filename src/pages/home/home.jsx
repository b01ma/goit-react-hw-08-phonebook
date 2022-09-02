import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Contacts</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati esse
        explicabo voluptatum, odit error ut quidem sit soluta omnis animi?
      </p>
      <button type="button">
        <Link to="/auth/logIn">Login</Link>
      </button>
      <button type="button">
        <Link to="/auth/registration">Register</Link>
      </button>
    </div>
  );
}

export default Home;
