import React, { useState, useContext } from "react";
import Cart from "../svg/cart.svg";
import { Link } from "react-router-dom";
import { DataContext } from "../Shop/DataProvider";

import "./subHeader.scss";

const SubHeader = () => {
  const [menu, setMenu] = useState(false);
  const value = useContext(DataContext);
  const [cart] = value.cart;
  return (
    <div className="subHeader">
      <div className="subHeader__nav">
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <Link to="/nft">NFT's</Link>
        </span>
        <span>
          <Link to="/shop">SHOP</Link>
        </span>
        <div className="cart-icon">
          <span>{cart.length}</span>
          <Link to="/cart">
            <img src={Cart} alt="" width="30" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
