import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className='navbar'>
        <p className='logoText'>GreenFinance</p>
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
          <NavLink to='/services'>Services</NavLink>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
