import React from "react";
import { Link } from "react-router-dom";
import NFTDataOne from "../Home/data";
import "./gallery.sass";

function Gallery() {
  return (
    <div className="gallery__container">
      <div id="overview" className="gallery__section-content">
        {NFTDataOne.map((item, index) => {
          return (
            <Link to="/nft">
              <div key={index} className="gallery__nft-container">
                <div className="gallery__nft-heading">
                  <h3>{item.title}</h3>
                </div>
                <div className="gallery__nft-img">
                  <img src={item.img} alt="NTF's" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
