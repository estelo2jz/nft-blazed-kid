import React, { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { DataNFTContext } from "./DataNFTProvider";
import DetailsThumb from "./DetailsThumb";
import "./nftDetails.scss";

export default function NFTDetails() {
  const { id } = useParams();
  const value = useContext(DataNFTContext);
  const [products] = value.products;

  const [index, setIndex] = useState(0);

  const details = products.filter((product) => {
    return product._id === id;
  });

  return (
    <div className="nft-details-page">
      {details.map((product) => {
        const images = product.images || [];

        return (
          <div className="nft__details" key={product._id}>
            {/* Left Side: Cinematic Showcase Stage */}
            <div className="nft__left-section">
              <div className="nft__img-container">
                <img 
                  key={index} 
                  src={images[index] || ""} 
                  alt={product.title} 
                  className="nft__active-preview"
                />
                <div className="stage-glow"></div>
                <div className="badge-live">Exhibition View #{index + 1}</div>
              </div>
            </div>

            {/* Right Side: NFT Metadata & Thumbnail Selector */}
            <div className="nft__box-details">
              <div className="nft__main-heading">
                <div className="nft__box__details__title">
                  <h2 title={product.title}>{product.title}</h2>
                </div>
                <div className="nft__box__details__desc">
                  <p>{product.description}</p>
                </div>
              </div>

              {/* Interactive Thumbnail Selector Section */}
              <div className="nft__selector-section">
                <h4>Choose Asset View</h4>
                <div className="nft__details__sub__imgs">
                  {/* Preserving your original DetailsThumb integration */}
                  <DetailsThumb images={images} setIndex={setIndex}>
                    {images.map((imgSrc, imgIdx) => (
                      <div 
                        key={imgIdx} 
                        className={`thumb-wrapper ${index === imgIdx ? 'active' : ''}`}
                        onClick={() => setIndex(imgIdx)}
                      >
                        <img src={imgSrc} alt={`thumb-${imgIdx}`} />
                      </div>
                    ))}
                  </DetailsThumb>
                </div>
              </div>

              {/* Marketplace Link & Actions */}
              <div className="nft__details__view">
                <span className="view-label">External Marketplace</span>
                <div className="nft__details__view__socials">
                  <a href={product.src || "#"} target="_blank" rel="noreferrer" className="btn-opensea">
                    <span>View on OpenSea</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </a>
                  <Link to="/nft" className="btn-back">
                    ← Back to Catalog
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}