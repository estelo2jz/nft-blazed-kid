import React from "react";
import { NavLink } from "react-router-dom";

import "./subHeader.scss";


const SubHeader = () => {
  return (
    <div className="subHeader">
      <div className="subHeader__nav">
        <div className="subHeader__nav-inner">
          <span>
            <NavLink to="/">Home</NavLink>
          </span>
          <span>
            <NavLink to="/gallery">Gallery</NavLink>
          </span>
          {/* <span>
            <NavLink to="/nft">NFT's</NavLink>
          </span> */}
          {/* <span>
            <NavLink to="/nft">Collection's</NavLink>
          </span> */}
        </div>
        {/* <div className="cart-icon">
          <span>{cart.length}</span>
          <Link to="/cart">
          <img src={Cart} alt="" width="30" />
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default SubHeader;
