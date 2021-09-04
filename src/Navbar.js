import React from 'react';
import { NavLink } from 'react-router-dom';

import './App.css';

const Navbar = () => {
  return (
    <>
      <ul>
        <li className="all">
          <NavLink to="/">All</NavLink>
        </li>
        <li>
          <NavLink to="/trending">Trending</NavLink>
        </li>
        <li>
          <NavLink to="/newrelease">New Release</NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
