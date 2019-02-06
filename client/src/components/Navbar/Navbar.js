import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = ({location : { pathname }}) => (
  <nav>
    <Link className={`nav-item nav-link ${pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
    <Link className={`nav-item nav-link ${pathname === '/component' ? 'active' : ''}`} to="/component">Component</Link>
  </nav>
)

export default Navbar