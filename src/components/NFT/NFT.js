import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NFTData from "./Data/data";
import Products from "../Products";
import "./nft.scss";

const NFT = () => {
  return (
      <div className="about">
        <Products />
        {/* {NFTData.map((item, index) => {
        return (
          <Link to={item.path}>
            <div key={index} className="about__nft-container">
              <div className="about__nft-heading">
                <h3>{item.title}</h3>
              </div>
              <div className="about__nft-img">
                <img src={item.img} alt="NTF's" />
              </div>
            </div>
          </Link>
        );
      })} */}
      </div>
  );
};

export default NFT;
