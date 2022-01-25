import React from "react";
import { Link } from "react-router-dom";
import './nav.scss'
import IMG from './logo.jpeg'
import IMG2 from './Logo2.jpeg'
import IMG3 from './logo6.gif'
import IMG4 from './bkid.gif'


const Nav = () => {
  return (
    <div className="nav__container">
      <header>
        <a href="#home" class="logo">
          {/* <p>BLAZED KID</p> */}
          <img src={IMG4} alt="logo" />
        </a>
        {/* <ul class="navigation">
          <li>
            <Link to='/home'>Home</Link>
          </li>
          <li>
            <Link to='/about'>NFT's</Link>
          </li>
        </ul> */}
      </header>
    </div>
  );
};

export default Nav;
