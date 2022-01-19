import React from 'react';
import './Nav.scss';

function Nav() {
  return (
    <nav className="nav-main">
      <div className="section-left">
        <img
          src="images/Moon/MainMoon/instagramLogo.png"
          alt="instagram"
          className="instalogo"
        />
      </div>
      <div className="section-center">
        <input type="text" placeholder="검색" className="search-box" />
      </div>
      <div className="section-right">
        <img src="images/Moon/MainMoon/dmLogo.png" alt="dm" className="icon" />
        <img
          src="/images/Moon/MainMoon/heartLogo.png"
          alt="heart"
          className="icon icon-heart"
        />
        <img
          src="images/Moon/MainMoon/homeLogo.png"
          alt="home"
          className="icon icon-home"
        />
        <img
          src="images/Moon/MainMoon/profilepic.png"
          alt="profile"
          className="icon-profile"
        />
      </div>
    </nav>
  );
}

export default Nav;
