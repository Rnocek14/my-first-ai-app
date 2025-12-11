import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className='navbar'>
      <h1>Stroke Recovery Companion</h1>
      <div className='nav-links'>
        <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
        <NavLink to='/exercises' className={({ isActive }) => (isActive ? 'active' : '')}>Exercises</NavLink>
        <NavLink to='/log' className={({ isActive }) => (isActive ? 'active' : '')}>Daily Log</NavLink>
        <NavLink to='/resources' className={({ isActive }) => (isActive ? 'active' : '')}>Resources</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;