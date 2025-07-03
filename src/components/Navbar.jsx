import React from 'react';
import { Link } from 'react-router-dom'; // Assuming React Router for navigation
import '../styles/Navbar.css'; // For styling

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav_logo">
        <Link to="/">Sandeep</Link>
      </div>
      <ul className="nav_items">
         <li><Link to="/about">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;