// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/category/a">Category A</Link></li>
        <li><Link to="/category/b">Category B</Link></li>
        {/* Add more categories as needed */}
      </ul>
    </nav>
  );
}

export default NavBar;
