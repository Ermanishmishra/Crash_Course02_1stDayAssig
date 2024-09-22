import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul style={{display:"flex", justifyContent:"space-evenly"}}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/user">Users</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
