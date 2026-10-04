import React from "react";
import { Link } from "react-router-dom";
import NFTDataOne from "../Home/data";
import "./gallery.scss";

function Gallery() {
  return (
    <div className="gallery__container">
      <div className="gallery__header">
        <h1>Blazed Kid Gallery</h1>
        <p>Explore the complete collection of rare digital assets on-chain.</p>
      </div>

      <div id="overview" className="gallery__section-content">
        {NFTDataOne.map((item, index) => {
          // Calculate a staggered delay based on the card index (e.g., 0.08s per item)
          const animationDelay = `${index * 0.08}s`;

          return (
            <Link 
              to="/nft" 
              key={index} 
              className="gallery__nft-link-wrapper"
              style={{ "--delay": animationDelay }}
            >
              <div className="gallery__nft-container">
                <div className="gallery__nft-img">
                  <img src={item.img} alt={item.title || "NFT item"} />
                  <div className="gallery__img-overlay"></div>
                </div>
                <div className="gallery__nft-heading">
                  <h3>{item.title}</h3>
                  <span className="view-tag">View Asset →</span>
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