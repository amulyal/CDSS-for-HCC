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
      <li className="divider" />
      <li className="linkItem">
        <NavLink
          to="predictor"
          className={({ isActive }) => (isActive ? 'activelink' : undefined)}
        >
          Predictor
        </NavLink>
      </li>
      <li className="divider" />
      <li className="linkItem">
        <NavLink
          to="analyser"
          className={({ isActive }) => (isActive ? 'activelink' : undefined)}
        >
          Analyser
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
