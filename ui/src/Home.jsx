import React from 'react';
import { NavLink } from 'react-router-dom';

import Routes from './Routes.jsx';

const NavBar = () => (
  <nav className="nav-bar">
    <NavLink className="submit-button submit-button-dark" exact to="/">Home</NavLink>
  </nav>
);

/* Home component which shows the static Navbar and the Contents */
const Home = () => (
  <div>
    <NavBar />
    <Routes />
  </div>
);

export default Home;
