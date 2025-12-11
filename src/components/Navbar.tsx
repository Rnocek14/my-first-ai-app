import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui';

const Navbar: React.FC = () => {
  return (
    <nav className='navbar'>
      <h1>Stroke Recovery Companion</h1>
      <div className='nav-links'>
        <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
        <NavLink to='/exercises' className={({ isActive }) => (isActive ? 'active' : '')}>Exercises</NavLink>
        <NavLink to='/log' className={({ isActive }) => (isActive ? 'active' : '')}>Daily Log</NavLink>
        <NavLink to='/resources' className={({ isActive }) => (isActive ? 'active' : '')}>Resources</NavLink>
        <NavLink to='/contact' className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
      </div>
      <Button variant='primary' className='ml-4'>Get Started</Button>
    </nav>
  );
};

export default Navbar;