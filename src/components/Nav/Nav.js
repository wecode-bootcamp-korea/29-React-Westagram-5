import React from 'react';
import './Nav.scss';

function Navbar() {
  return (
    <nav className="navBar">
      <i className="fab fa-instagram" />
      <span>westagram</span>
      <input className="searching" type="text" placeholder="검색" />
      <i className="far fa-user" />
      <i className="far fa-compass" />
      <i className="far fa-heart" />
    </nav>
  );
}

export default Navbar;
