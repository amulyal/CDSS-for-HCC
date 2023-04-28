import React from 'react';
import { NavLink } from 'react-router-dom';
import '../stylesheets/Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <h1 className="title" data-testid="title">CDSS for Liver Cancer</h1>
    <ul className="links" data-testid="nav-links">
      <li className="linkItem">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? 'activelink' : undefined)}
        >
          Home
        </NavLink>
      </li>
      <li className="linkItem">
        <NavLink
          to="metroticket"
          end
          className={({ isActive }) => (isActive ? 'activelink' : undefined)}
        >
          Tool 1
        </NavLink>
      </li>
      <li className="linkItem">
        <NavLink
          to="predictor"
          className={({ isActive }) => (isActive ? 'activelink' : undefined)}
        >
          Tool 2
        </NavLink>
      </li>
      <li className="linkItem">
        <NavLink
          to="analyser"
          className={({ isActive }) => (isActive ? 'activelink' : undefined)}
        >
          Tool 3
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
