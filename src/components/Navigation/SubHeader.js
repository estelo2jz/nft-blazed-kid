import React, { useState, useContext } from "react";
import Cart from "../svg/cart.svg";
import { NavLink } from "react-router-dom";
import { DataContext } from "../Shop/DataProvider";

import "./subHeader.scss";

const SubHeader = () => {
  const [menu, setMenu] = useState(false);
  const value = useContext(DataContext);
  const [cart] = value.cart;
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
          <span>
            <NavLink to="/nft">NFT's</NavLink>
          </span>
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
