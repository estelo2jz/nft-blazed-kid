import React from "react";
import { Link } from "react-router-dom";

import "./subHeader.scss";

const SubHeader = () => {
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
      </div>
    </div>
  );
};

export default SubHeader;
