import React from "react";
import { NavLink } from "react-router-dom";
import "./subHeader.scss";

const SubHeader = () => {
  return (
    <header className="subHeader">
      <div className="subHeader__nav">
        <div className="subHeader__brand">
          <NavLink to="/" className="brand-logo">
            <span className="flame-icon">🔥</span> Blazed<span>Kid</span>
          </NavLink>
        </div>

        <nav className="subHeader__nav-inner">
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Home
          </NavLink>
          
          <NavLink 
            to="/gallery" 
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Gallery
          </NavLink>

          {/* Uncomment when ready */}
          {/* <NavLink 
            to="/nft" 
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Collections
          </NavLink> */}
        </nav>

        {/* Optional Action / Wallet Connect / Cart placeholder */}
        <div className="subHeader__actions">
          <a href="https://opensea.io" target="_blank" rel="noreferrer" className="btn-wallet">
            <span>Connect Wallet</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default SubHeader;